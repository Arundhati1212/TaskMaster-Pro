import Navbar from "./components/Navbar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";
function App() {
  const [projectList, setProjectList] = useState({
    selectedProject: undefined,
    allProjects: [],
  });

  //When clicked on Add project button - to open the form window(NewProject)
  function addProject() {
    setProjectList((prev) => {
      return {
        ...prev,
        selectedProject: null,
      };
    });
  }

  // When clicked Save in the Add Project window(NewProject)
  // Adds project details to the state array
  function handleAddProject(projectData) {
    setProjectList((prev) => {
      return {
        selectedProject: undefined,
        allProjects: [
          ...prev.allProjects,
          { ...projectData, key: Math.random(), tasks: [] },
        ],
      };
    });
  }

  // When clicked on cancel button in the NewProject window
  function handleCancel() {
    setProjectList((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
      };
    });
  }

  // When clicked on added projects to see its details
  function handleSelectedProject(id) {
    setProjectList((prev) => {
      return {
        ...prev,
        selectedProject: id,
      };
    });
  }

  //When clicked on delete in the SelectedProject window
  function handleDelete() {
    setProjectList((prev) => {
      const deletedProject = prev.allProjects.filter(
        (project) => project.key !== prev.selectedProject
      );

      return {
        selectedProject: undefined,
        allProjects: [...deletedProject],
      };
    });
  }

  function handleAddTask(task) {
    setProjectList((prev) => {
      prev.allProjects[selectedProjectIndex].tasks = [
        ...prev.allProjects[selectedProjectIndex].tasks,
        task,
      ];
      return {
        ...prev,
      };
    });
  }
  function handleDeleteTask(taskName) {
    setProjectList((prev) => {
      // prev.allProjects[selectedProjectIndex].tasks.splice(Taskindex, 1);
      prev.allProjects[selectedProjectIndex].tasks = prev.allProjects[
        selectedProjectIndex
      ].tasks.filter((task) => task !== taskName);
      return {
        ...prev,
      };
    });
  }

  const selectedProject = projectList.allProjects.find(
    (project) => project.key === projectList.selectedProject
  );
  const selectedProjectIndex = projectList.allProjects.findIndex(
    (project) => project.key === projectList.selectedProject
  );

  let content = (
    <SelectedProject
      handleDelete={handleDelete}
      selectedProject={selectedProject}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
    />
  );

  if (projectList.selectedProject === null) {
    content = (
      <NewProject
        handleAddProject={handleAddProject}
        handleCancel={handleCancel}
      />
    );
  } else if (projectList.selectedProject === undefined) {
    content = <NoProjectSelected addProject={addProject} />;
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Navbar
          addProject={addProject}
          handleSelectedProject={handleSelectedProject}
          projectList={projectList.allProjects}
        />
        {content}
      </main>
    </>
  );
}

export default App;
