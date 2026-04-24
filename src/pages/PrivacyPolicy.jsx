import { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp/FloatingWhatsApp";
import Header from "../components/Header/Header";
import privacyPolicyMarkdown from "../content/privacy-policy.md?raw";
import { HOME_PATH } from "../constants/routes";
import "./PrivacyPolicy.css";

const privacyPolicyBlocks = parseMarkdownDocument(privacyPolicyMarkdown);

export default function PrivacyPolicy() {
  return (
    <>
      <Header homeHref={HOME_PATH} navigationBasePath={HOME_PATH} />
      <main id="main-content">
        <section
          className="privacy-policy"
          aria-labelledby="privacy-policy-title"
        >
          <div className="privacy-policy__container">
            <article className="privacy-policy__article">
              {privacyPolicyBlocks.map((block, index) => {
                if (block.type === "heading") {
                  const HeadingTag = `h${block.level}`;

                  return (
                    <HeadingTag
                      key={`${block.type}-${index}`}
                      className={`privacy-policy__heading privacy-policy__heading--${block.level}`}
                      id={block.level === 1 ? "privacy-policy-title" : undefined}
                    >
                      {renderInlineText(block.text, `${block.type}-${index}`)}
                    </HeadingTag>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul className="privacy-policy__list" key={`${block.type}-${index}`}>
                      {block.items.map((item, itemIndex) => (
                        <li
                          className="privacy-policy__list-item"
                          key={`${block.type}-${index}-${itemIndex}`}
                        >
                          {renderInlineText(
                            item,
                            `${block.type}-${index}-${itemIndex}`,
                          )}
                        </li>
                      ))}
                    </ul>
                  );
                }

                const paragraphClassName = block.lines.join(" ").startsWith("**Última atualização:**")
                  ? "privacy-policy__paragraph privacy-policy__paragraph--meta"
                  : "privacy-policy__paragraph";

                return (
                  <p className={paragraphClassName} key={`${block.type}-${index}`}>
                    {renderParagraphLines(block.lines, `${block.type}-${index}`)}
                  </p>
                );
              })}
            </article>
          </div>
        </section>
      </main>
      <Footer homeHref={HOME_PATH} navigationBasePath={HOME_PATH} />
      <FloatingWhatsApp />
    </>
  );
}

function parseMarkdownDocument(markdown) {
  const blocks = [];
  const lines = markdown.replace(/\r/g, "").split("\n");
  let paragraphLines = [];
  let listItems = [];

  const flushParagraph = () => {
    if (!paragraphLines.length) {
      return;
    }

    blocks.push({
      type: "paragraph",
      lines: [...paragraphLines],
    });
    paragraphLines = [];
  };

  const flushList = () => {
    if (!listItems.length) {
      return;
    }

    blocks.push({
      type: "list",
      items: [...listItems],
    });
    listItems = [];
  };

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      flushParagraph();
      flushList();
      return;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.*)$/);

    if (headingMatch) {
      flushParagraph();
      flushList();

      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        text: headingMatch[2].trim(),
      });
      return;
    }

    if (trimmedLine.startsWith("- ")) {
      flushParagraph();
      listItems.push(trimmedLine.slice(2).trim());
      return;
    }

    flushList();
    paragraphLines.push(line);
  });

  flushParagraph();
  flushList();

  return blocks;
}

function renderParagraphLines(lines, keyPrefix) {
  const content = [];

  lines.forEach((line, index) => {
    const hasManualLineBreak = /\s{2,}$/.test(line);
    const normalizedLine = line.replace(/\s{2,}$/, "");

    content.push(...renderInlineText(normalizedLine, `${keyPrefix}-${index}`));

    if (index < lines.length - 1) {
      content.push(
        hasManualLineBreak ? (
          <br key={`${keyPrefix}-break-${index}`} />
        ) : (
          <Fragment key={`${keyPrefix}-space-${index}`}> </Fragment>
        ),
      );
    }
  });

  return content;
}

function renderInlineText(text, keyPrefix) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((segment, index) => {
      if (segment.startsWith("**") && segment.endsWith("**")) {
        return (
          <strong key={`${keyPrefix}-${index}`}>
            {segment.slice(2, -2)}
          </strong>
        );
      }

      return <Fragment key={`${keyPrefix}-${index}`}>{segment}</Fragment>;
    });
}
