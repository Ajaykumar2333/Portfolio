import "./Toolkit.css";

const tools = [
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Photoshop", slug: "adobephotoshop", color: "31A8FF" },
  { name: "After Effects", slug: "adobeaftereffects", color: "9999FF" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "38BDF8" },
  { name: "Vite", slug: "vite", color: "646CFF" },
  { name: "GitHub", slug: "github", color: "ffffff" },
  { name: "VS Code", slug: "visualstudiocode", color: "007ACC" },
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
