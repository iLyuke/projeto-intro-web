const cursos = [
  {
    curso: "HTML e CSS",
    descricao: "Aprenda HTML e CSS o ",
    duracao: "Possui a duração de 1 mes.",
    valor: 500,
  },
  {
    curso: "JavaScript",
    descricao: "Aprenda JavaSctript do zero ",
    duracao: "O curso tem a duração de 2 meses.",
    valor: 900,
  },
  {
    curso: "APIeRest",
    descricao: "Aprenda APIeRest do zero",
    duracao: "Ocurso tem a duração de 6 meses.",
    valor: 2000,
  },
];

const turmas = [
  {
    turma: "Hipátia",
    curso: "JavaScript",
    inicio: "30/11/2022,",
    término: "30/01/2023",
    numeroDeAlunos: 150,
    período: "noturno",
    concluida: false,
  },
  {
    turma: "Sibyla",
    curso: "JavaScript",
    inicio: "30/10/2022",
    término: "30/12/2022",
    numeroDeAlunos: 200,
    período: "integral",
    concluida: false,
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    término: "15/10/2022",
    numeroDeAlunos: 180,
    período: "integral",
    concluida: true,
  },
  {
    turma: "Zheynyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    término: "01/01/2023",
    numeroDeAlunos: 80,
    período: "integral",
    concluida: false,
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    término: "04/09/2022",
    numeroDeAlunos: 200,
    período: "noturno",
    concluida: true,
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    término: "20/06/2022",
    numeroDeAlunos: 100,
    período: "integral",
    concluida: true,
  },
  {
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    término: "12/06/2023",
    numeroDeAlunos: 200,
    período: "noturno",
    concluida: true,
  },
  {
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/120/2022",
    término: "18/04/2023",
    numeroDeAlunos: 90,
    período: "integral",
    concluida: false,
  },
];

const estudantes = [
  {
    aluno: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: 900,
    nParcelas: 9,
    desconto: false,
    parcelas: "100",
  },
  {
    aluno: "Halle Berry",
    turma: "Burnell",
    curso: "APIeRest",
    valor: 2000,
    nParcelas: 4,
    desconto: false,
    parcelas: 500,
  },
  {
    aluno: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: 500,
    nParcelas: 1,
    desconto: true,
    parcelas: 0,
  },
];
//console.log(estudantes);
const carrinhoCursos = [500, 900, 400];

const parcelarCurso = (carrinhoCursos, parcela) => {
  let valorTotal = 0;
  let valorParcela = 0;
  let desconto = 0;

  if (carrinhoCursos.length > 1) {
    switch (carrinhoCursos.length) {
      case 3:
        desconto = 0.15;
        break;
      case 2:
        desconto = 0.1;
        break;
      default:
        desconto = 0;
        break;
    }

    for (let valor of carrinhoCursos) {
      valorTotal = valorTotal + valor;
    }
  }
  valorTotal = valorTotal - valorTotal * desconto;
  console.log(valorTotal);

  if (parcela <= 2) {
    valorTotal = valorTotal - valorTotal * 0.2;
    valorParcela = valorTotal / parcela;

    console.log(
      `O curso ${cursos[0].curso} ficou no valor total de R$${valorTotal}. Em ${parcela} X de ${valorParcela} reais.`
    );
  } else {
    valorTotal = cursos[0].valor;
    valorParcela = valorTotal / parcela;

    console.log(
      `O curso  ficou no valor total de R$${valorTotal}. Em ${parcela} X de ${valorParcela} reais. Foi cosedido desconte de 20%`
    );
  }
  console.log();
};

//console.log(parcelarCurso(carrinhoCursos));
const buscarCursos = (nomeCurso) => {
  for (cadaCurso of cursos) {
    if (cadaCurso.curso === nomeCurso) {
      return cadaCurso;
    }
  }
};

const buscarTurma = (nomeTurma) => {
  for (cadaTurma of turmas) {
    if (cadaTurma.turma === nomeTurma) {
      return cadaTurma;
    }
  }
};

const BuscarEstudante = (nomeEstudante) => {
  for (let cadaEstudante of estudantes) {
    //console.log(cadaEstudantes);
    if (cadaEstudante.aluno === nomeEstudante) {
      return cadaEstudante;
    }
  }
};
//console.log(buscarCursos);
//console.log(BuscarEstudante("Halle Berry"));

/* const matricular = (nome, curso, turma, nParcelas) => {
    let valorCurso = buscarCursos(curso)
    let valorTotal = 0 
    let valorPorParcela = 0

    if(nParcelas > 0 && nParcelas <= 2){       
        valorTotal = valorTotal - (valorCurso.valor * 0.2)
        valorPorParcela = valorTotal / nParcelas
    }else{
        valorTotal = valorCurso.valor 
        valorPorParcela = valorTotal / nParcelas
    }

    const novoAluno = {
      aluno: nome,
      turma: turma,
      curso: curso,
      valor: valorCurso.valor,
      nParcelas: nParcelas,
      desconto:false,
      parcelas: valorPorParcela,
    }; 
    estudantes.push(novoAluno)
    console.log(estudantes) 
} */
const matricular = (nome, curso, turma, nParcelas) => {
  estudantes.push({
    nome: nome,
    curso: curso,
    turma: turma,
    nParcelas: nParcelas,
  });
  //console.log(estudantes);
  // console.log(`Aluno matriculado\n Nome:${nome}\n Curso:${curso}\n Turma:${turma} \n nParcelas:${nParcelas}`);
};
//matricular("Joao", "JavaScript", "Burnell", 2);


//console.log(estudantes);===