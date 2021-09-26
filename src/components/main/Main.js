import MainStyle from './Main.module.css';
const Main = ({Ref , style , content, projects}) => {

  const class_style = projects? MainStyle.projectsContainer :MainStyle.container;
  return (
    <div
      ref={Ref}
      className={class_style}
      style={style}
    >
      {content}
    </div>
  );
};

export default Main;
