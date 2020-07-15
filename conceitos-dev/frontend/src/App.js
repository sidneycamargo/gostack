import React, { useState, useEffect} from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

/**
 * Conceitos importantes do React:
 *  * Componente
 *  * Propriedade
 *  * Estado
 */

function App() {
  const [projects, setProjects] = useState([]);

  console.log(projects);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    //projects.push(`Novo Projeto ${Date.now()}`);
    // setProjects([ ... projects, `Novo Projeto ${Date.now()}`])
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Sidney Camargo Moraes"6
    });

    const project = response.data;

    setProjects([ ... projects, project]);

    console.log(projects);
  }

  async function handleRemoveRepository(id) {

    const projectTmp = projects;

    const projectIndex = projects.findIndex( project => project.id === id);

    projectTmp.splice( projectIndex, 1);

    setProjects( projectTmp);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li> )}
        <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;