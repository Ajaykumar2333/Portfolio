import "./Toolkit.css";

const tools = [
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Adobe XD", slug: "adobexd", color: "FF61F6" },
  { name: "Photoshop", slug: "adobephotoshop", color: "31A8FF" },
  { name: "Illustrator", slug: "adobeillustrator", color: "FF9A00" },
  { name: "After Effects", slug: "adobeaftereffects", color: "9999FF" },
  { name: "Premiere Pro", slug: "adobepremierepro", color: "9999FF" },
];

const Toolkit = () => {
  return (
    <section className="toolkit" id="toolkit">
      <div className="toolkit-track">
        {tools.map((tool) => (
          <div className="toolkit-tile" key={tool.slug}>
            <div className="toolkit-icon">
              <img
                src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
                alt={tool.name}
                loading="lazy"
              />
            </div>
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Toolkit;