import React from "react";

const RenderContent = ({ content }) => {
  // Recursive function to render content
  const renderNode = (node) => {
    const { type, children, level, text, bold, italic, format } = node;

    // Handle text nodes
    if (type === "text") {
      let renderedText = text;

      // if (bold) renderedText = <strong>{renderedText}</strong>;
      // if (italic) renderedText = <em>{renderedText}</em>;

      return renderedText;
    }

    // Handle other node types
    switch (type) {
      case "heading":
        const HeadingTag = `h${level || 3}`; // Default to h3 if level is undefined
        return (
          <HeadingTag className='mb-4 leading-5 md:text-2xl text-xl  text-neutral-900 font-semibold'>
            {children?.map((child, index) => (
              <React.Fragment key={index}>{renderNode(child)}</React.Fragment>
            ))}
          </HeadingTag>
        );

      case "paragraph":
        return (
          <p className='text-base leading-[26px] font-normal text-neutral-700 mb-4'>
            {children?.map((child, index) => (
              <React.Fragment key={index}>{renderNode(child)}</React.Fragment>
            ))}
          </p>
        );

      case "list":
        const ListTag = format === "ordered" ? "ol" : "ul"; // Determine list type
        return (
          <ListTag className="list-outside">
            {children?.map((listItem, index) => (
              <li className="list-disc text-base leading-[26px] font-normal text-neutral-700 mb-4" key={index}>
                {listItem.children?.map((child, childIndex) => (
                  <span className={` ${childIndex == 0 ? 'font-medium' : null} `}>
                  <React.Fragment key={childIndex}>
                    {renderNode(child)}
                  </React.Fragment>
                  </span>
                ))}
              </li>
            ))}
          </ListTag>
        );

      default:
        return null;
    }
  };

  // Map through the content array
  return content.map((node, index) => (
    <React.Fragment key={index}>{renderNode(node)}</React.Fragment>
  ));
};

export default RenderContent;
