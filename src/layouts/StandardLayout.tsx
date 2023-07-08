import { Navbar } from "../components/index";

interface StandardLayoutProps {
  page: JSX.Element;
}

const StandardLayout = (props: StandardLayoutProps) => {
  return (
    <>
      <Navbar />
      <div>{props.page}</div>
    </>
  );
};

export default StandardLayout;
