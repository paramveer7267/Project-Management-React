import ProjectS from "./components/ProjectS";
import NewP from "./components/NewP";
import NoPS from "./components/NoPS";
import { useState } from "react";
import SelectedP from "./components/SelectedP";

function App() {
  const [projectS, setProjectS] = useState({
    selectedPI: undefined,
    project: [],
    tasks: [],
  });

  function handleAT(text) {
    setProjectS((prev) => {
      const taskId = Math.random();
      const newT = {
        text: text,
        projectId: prev.selectedPI,
        id: taskId,
      };
      return {
        ...prev,
        tasks: [newT, ...prev.tasks],
      };
    });
  }
  function handleDT(id) {
    setProjectS((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }
  function handleSAP() {
    setProjectS((prev) => {
      return {
        ...prev,
        selectedPI: null,
      };
    });
  }

  function handleCAP() {
    setProjectS((prev) => {
      return {
        ...prev,
        selectedPI: undefined,
      };
    });
  }
  function handleSP(id) {
    setProjectS((prev) => {
      return {
        ...prev,
        selectedPI: id,
      };
    });
  }
  function handleAP(projectData) {
    setProjectS((prev) => {
      const newP = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prev,
        selectedPI: undefined,
        project: [...prev.project, newP],
      };
    });
  }

  function handleDP() {
    setProjectS((prev) => {
      return {
        ...prev,
        selectedPI: undefined,
        project: prev.project.filter(
          (pro) => pro.id !== prev.selectedPI
        ),
      };
    });
  }
  const sProject = projectS.project.find(
    (pro) => pro.id === projectS.selectedPI
  );
  let content = (
    <SelectedP
      pro={sProject}
      onDel={handleDP}
      onAddTask={handleAT}
      onDelTask={handleDT}
      tasks={projectS.tasks}
    ></SelectedP>
  );

  if (projectS.selectedPI === null) {
    content = (
      <NewP onAdd={handleAP} onCancel={handleCAP} />
    );
  } else if (projectS.selectedPI === undefined) {
    content = <NoPS onStartAddP={handleSAP} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectS
        onStartAddP={handleSAP}
        pro={projectS.project}
        onSelect={handleSP}
        seletedPI={projectS.selectedPI}
      />
      {content}
    </main>
  );
}

export default App;
