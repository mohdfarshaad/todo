import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-[300px] w-[400px] bg-red-300"></div>
        <div className="h-[300px] w-[400px] bg-red-300"></div>
        <div className="h-[300px] w-[400px] bg-red-300"></div>
        <div className="h-[300px] w-[400px] bg-red-300"></div>
        <div className="h-[300px] w-[400px] bg-red-300"></div>
        <div className="h-[300px] w-[400px] bg-red-300"></div>
      </div>
    </Layout>
  );
}

export default Home;
