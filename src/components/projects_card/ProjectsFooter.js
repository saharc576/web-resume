import ItemPic from "./ItemPic";
import ProjectsFooterStyle from "./ProjectsFooter.module.css";

const ItemsPic = [
  {
    id: "javascript",
    Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "javascript",
    width: "50",
    height: "50",
    Checking: false,
  },
  {
    id: "typescript",
    Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    alt: "typescript",
    width: "50",
    height: "50",
    Checking: false,
  },
  {
    id: "cpp",
    Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    alt: "cpp",
    width: "50",
    height: "50",
    Checking: false,
  },
  {
    id: "java",
    Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    alt: "java",
    width: "50",
    height: "50",
    Checking: false,
  },
  {
    id: "python",
    Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    alt: "python",
    width: "50",
    height: "50",
    Checking: false,
  },
  {
    id: "React",
    Link: "https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/React.png?alt=media&token=8e57a7f9-266c-431c-9b81-25b2c73431b8",
    alt: "React",
    width: "50",
    height: "50",
    Checking: true,
  },
  {
    id: "html",
    Link: "https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/html.png?alt=media&token=f01da63f-2423-4f8f-807f-59cf03250eb9",
    alt: "html",
    width: "50",
    height: "50",
    Checking: true,
  },
  {
    id: "css",
    Link: "https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/CSS.png?alt=media&token=0653f379-0395-4f51-8a01-293b125ae75b",
    alt: "css",
    width: "50",
    height: "50",
    Checking: true,
  },
];
const ProjectsFooter = () => {
  const Signs = ItemsPic.map((currLink) => (
    <ItemPic
      id={currLink.id}
      Link={currLink.Link}
      alt={currLink.alt}
      width={currLink.width}
      height={currLink.height}
    />
  ));

  return (
    <section className={ProjectsFooterStyle.item}>
      <ul> {Signs}</ul>
    </section>
  );
};
export default ProjectsFooter;
