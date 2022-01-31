import Tasks from '../components/Tasks'

function Home({tasks}) {
  return (
    <>
      <section className="text-center">
        <p className="h5">Track what you and your team are working on daily so you can know who worked on what.</p>
        <Tasks tasks={tasks} />
      </section>
    </>
  );
}

export default Home;
