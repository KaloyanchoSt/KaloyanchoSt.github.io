import { BaseSheetViewModel } from "@/Types/BaseSheet";

export function getBaseSheetDetails(): Promise<BaseSheetViewModel> {
  return new Promise((resolve) => {
    resolve({
      Name: "Kaloyan Stefanov",
      Position: "Software Developer",
      Summary:
        "Software developer with thorough hands-on experience in participating in development of application architecture and design, testing, migration, bug fixing and mantaining, drafting functional and technical documentation.",
      Contacts: [
        { ID: 1, Type: "Phone", Value: "0896487238", Icon: "" },
        { ID: 2, Type: "Email", Value: "kaloyanchost@gmail.com", Icon: "" },
        {
          ID: 1,
          Type: "LinkedIn",
          Value: "www.linkedin.com/in/kaloyan-stefanov-104566113/",
          Icon: "",
        },
      ],
      Experience: [
        {
          ID: 1,
          From: "01/2017",
          Until: "Present",
          Company: "Ada-soft",
          Position: "Software Developer",
          Location: "Sofia, Bulgaria",
          Projects: [
            {
              ID: 1,
              Name: "CRM",
              From: "04/2019",
              Until: "Present",
              Description: "CRM: provides easy access to information from the desktop application EasyCheck, in the Web",
              Technologies: [
                "Vue.js",
                "JavaScript",
                "CSS",
                "HTML",
                ".NET Core",
                "SQL"
              ],
            },
          ],
        },
      ],
      Education: [
        {
          ID: 1,
          From: "04/2016",
          Until: "12/2016",
          Institution: "Telerik Academy",
          Specialty: "Software Academy",
          Location: "Sofia, Bulgaria",
          Subjects: [
            "HTML",
            "CSS",
            "JavaScript",
            "C#",
            "Data Structures Algorithms",
            "Web Services",
            "Databases",
          ],
        },
        {
          ID: 2,
          From: "2008",
          Until: "2014",
          Institution: "University of National and World Economy",
          Specialty: "Statistics and Econometrics",
          Location: "Sofia, Bulgaria",
          Subjects: [
            "Mathematics",
            "Informatics",
            "Statistics",
            "Fundamentals of Algorithmization and Programming",
            "Internet Technologies",
            "Computer Networks and Telecommunications",
          ],
        },
        {
          ID: 3,
          From: "2003",
          Until: "2008",
          Institution: "National High School in Finance and Business",
          Specialty: "Management and Economics",
          Location: "Sofia, Bulgaria",
          Subjects: [],
        },
      ],
      Projects: [{}, {}, {}],
    });
  });
}

export function getEmptyBaseSheetViewModel(): BaseSheetViewModel {
  return {
    Name: "",
    Summary: "",
    Position: "",
    Contacts: [],
    Experience: [],
    Education: [],
    Projects: [],
  };
}
