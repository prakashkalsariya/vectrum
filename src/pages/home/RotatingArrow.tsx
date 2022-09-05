import React from "react";
import { IQuestion } from "../../@types/IQuestion";
import QuestionBox from "./QuestionBox";

import "./RotatingArrow.scss";

const questions: IQuestion[] = [
  
  {
    id: 1,
    question: "What is web development?",
    answere:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, modi quae. Dolore pariatur expedita nam reprehenderit hic, labore unde voluptates saepe aspernatur inventore? Iste consequatur saepe obcaecati aspernatur nobis sequi ducimus explicabo, praesentium autem, maxime error. Adipisci, facilis necessitatibus sit sunt ut ex accusantium voluptas eos quasi, distinctio recusandae consequatur culpa tempore nam, hic molestiae excepturi earum error. Possimus voluptatum soluta, quaerat amet delectus alias consequuntur maxime esse impedit corporis quidem aperiam modi inventore illo aliquid accusantium, dolore dolorum quis pariatur enim nobis labore itaque temporibus! Consectetur dolores aspernatur iusto, ut odit harum ducimus perferendis impedit obcaecati. Doloremque, suscipit consectetur voluptatem voluptates labore iure modi accusamus nesciunt aperiam perferendis quidem! Fuga ducimus rerum modi accusamus expedita non, temporibus, laudantium cum dolorum asperiores vero, quod voluptatem placeat dolor id magni. Voluptates, fugiat laudantium velit molestiae nostrum veniam adipisci, aut minima labore amet, magnam commodi! Illum debitis veritatis optio doloremque obcaecati, cum dolore fugit ratione saepe praesentium ex expedita id, officia accusamus sed vel delectus nemo aut sequi earum ut odio. Sint, doloremque eligendi nesciunt tempore possimus repudiandae! Id vero temporibus iusto iste esse aspernatur eveniet sunt porro officia totam, expedita amet tenetur quis similique fuga quae non voluptates. Delectus vitae aliquam adipisci perspiciatis explicabo! Animi earum nihil incidunt veniam officiis quae tenetur quia in officia quasi modi reprehenderit unde doloremque, quos blanditiis rerum non error ex a. Ipsam numquam culpa sed quos voluptatibus hic, aspernatur, corporis est quo voluptate quis sit. Odit fugiat repellendus totam, maiores tempora asperiores quos dignissimos! Excepturi placeat quia provident deserunt, sapiente, qui possimus obcaecati nulla aspernatur exercitationem explicabo eveniet illum veniam adipisci quisquam delectus ea. Amet ut, sunt minima fugiat voluptates architecto error facilis rerum eligendi cum temporibus ullam necessitatibus, ab nulla commodi placeat quis facere odit libero eveniet odio iste est! Velit dignissimos sapiente, magni tempore eum esse maxime iure deleniti dolorem inventore? Distinctio odio architecto soluta error ipsa maxime ullam natus id officia adipisci eveniet in, quo laboriosam molestiae earum ipsum atque tempore aliquam accusamus excepturi quaerat impedit pariatur? Est ducimus reiciendis animi quod possimus magni suscipit, laudantium facilis eveniet non! Dolores, adipisci velit veritatis autem suscipit nulla quibusdam esse ipsam repellat corporis. Cumque, ullam! Odit, dolorem voluptatibus eum aut pariatur temporibus debitis ab ea dolorum itaque cumque blanditiis nesciunt quis beatae voluptates perferendis voluptatem omnis architecto repellat eius eos. Quos deleniti quia hic at amet cumque, illum quo, non et, eum impedit tempora.",
    expert_country: "Vietnam",
    expert_designation: "Dev Ops",
    expert_first_name: "Tony",
    expert_last_name: "Dinh",
    expert_profile_image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
  }
];

const RotatingArrow = () => {
  return (
    <div className="home-screen">
      <div className="content-container">
        <div className="questions-list">
          {questions.map((question) => (
            <div key={question.id} className="question-container">
              <QuestionBox key={question.id} questionData={question} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RotatingArrow;
