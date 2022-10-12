import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
const SECRET_BCRYPT = Number(process.env.SECRET_BCRYPT)
const prisma = new PrismaClient();

const main = async () => {
  const user = [
		{
			name: "kadson",
			email: "kadson@gmail.com",
			password: bcrypt.hashSync('kadson', SECRET_BCRYPT),
		},
	];
  const experience = [
    {
      name: "Junior",
    },
    {
      name: "Pleno",
    },
    {
      name: "Senior",
    },
  ];
  const tags = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "ReactJs",
    },
    {
      name: "NodeJs",
    },
    {
      name: "Angular",
    },
    {
      name: "Ruby on Rails",
    },
  ];
  const jobs = [
    {
      name: "Developer FullStack Junior",
      link:"DAVi--LBN4e_TsBdNK8xZ",
      description:"Alguém capaz de trabalhar tanto no back-end quanto no front-end de sistemas."
    },
    {
      name: "Developer Front-End Senior",
      link:"9u9pxbnw-zPRd7JHgFgrS",
      description:"Executa a manutenção dos sistemas, fazendo eventuais correções necessárias. Desenvolve trabalhos de montagem, depuração e testes de programas, executando serviços de manutenção nos programas já desenvolvidos."
    },
  ];
  const candidates = [
    {
      name: "Kadson Lima",
      numberContact:"84996443438",
      email:"kadson-kaio@hotmail.com",
      curriculum: "https://storage.googleapis.com/storagejobmanager.appspot.com/curriculos/Kadson-server.ts"
    },
    {
      name: "João Mario",
      numberContact:"84992354235",
      email:"joaomario@hotmail.com",
      curriculum: "https://storage.googleapis.com/storagejobmanager.appspot.com/curriculos/Kadson-server.ts"

    },
  ];
  const jobTags = [
    {
      jobId:1,
      tagId:1
    },
    {
      jobId:1,
      tagId:2
    },
    {
      jobId:1,
      tagId:3
    },
    {
      jobId:1,
      tagId:4
    },
    {
      jobId:2,
      tagId:1
    },
    {
      jobId:2,
      tagId:2
    },
    {
      jobId:2,
      tagId:3
    }
  ];
  const jobExps = [
    {
      jobId:1,
      experienceId:1
    },
    {
      jobId:1,
      experienceId:2
    }
  ];
  const jobCandidatures = [
    {
      jobId:1,
      candidateId:1
    },
    {
      jobId:1,
      candidateId:2
    },
    {
      jobId:2,
      candidateId:1
    },
    {
      jobId:2,
      candidateId:2
    }
  ];
  await prisma.user.createMany({ data: user })
  await prisma.experience.createMany({ data: experience });
  await prisma.tag.createMany({ data: tags });
  await prisma.job.createMany({ data: jobs });
  await prisma.candidate.createMany({ data: candidates });
  await prisma.jobAndTags.createMany({ data: jobTags });
  await prisma.jobAndExperience.createMany({ data: jobExps });
  await prisma.jobAndCandidate.createMany({data:jobCandidatures});
  
};

main()
  .catch((err) => console.error(err))
  .finally(async () => prisma.$disconnect());