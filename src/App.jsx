import { Form } from "react-router-dom";
import AboutPage from "./AboutPage";
import Address from "./Address";
import ButtonClick from "./ButtonClick";
import College from "./College";
import DWNavLink from "./DWNavLink";
import DWRoute from "./DWRoute";
import EffectOfData from "./EffectOfData";
import FatherDetails from "./FatherDetails";
import Image from "./Image";
import Info from "./info";
import Laptop from "./Laptop";
import LearnJson from "./learnJSONParseStringify/LearnJson";
import LearnJsonStrParse from "./learnJSONParseStringify/LearnJsonParse";
import AddToLocalStorage from "./learnLocalSrorage/AddToLocalStorage";
import GetLocalStorage from "./learnLocalSrorage/GetLocalStorage";
import RemoveLocalStorage from "./learnLocalSrorage/RemoveLocalStorage";
import LearnMap1 from "./LearnMap1";
import LearnMap2 from "./LearnMap2";
import AddDataToSessionStorage from "./learnSessionStorage/AddDataToSessionStorage";
import GetSessionStorage from "./learnSessionStorage/GetSessionStorage";
import RemoveSession from "./learnSessionStorage/RemoveSession";
import TernaryOpt from "./TernaryOpt";
import LearnUseStateHooks from "./useStateHooks/1LearnUseStateHooks";
import LearnUseStateHooks2 from "./useStateHooks/2LearnUseStateHooks";
import LearnUseState3 from "./useStateHooks/3LearnUseState";
import LearnUseStateHooks4 from "./useStateHooks/4LearnUseStateHooks";
import Form1 from "./learnForm/Form1";

const App = () => {
  // console.log("lets learn react"); in case of react the clg prints in the browser

  let name = "suntali";
  let surname = "pokie";
  return (
    // <div>
    //   <h1>Dayum gurl</h1>
    //   {name} is soo {surname} and
    //   <p>she is a {9 + 1}</p>
    //   lives in
    //   <Address></Address> {/* opening and closing tag */}
    //   obcessed with father name <FatherDetails />
    //   <EffectOfData /> {/* self closing tag */}
    //   <Info
    //     name="susant"
    //     address="ktm"
    //     country="nepal"
    //     ward={1}
    //     phoneNumber={9861211174}
    //     ismarried={false}
    //   />
    //   <College name="deerwalk" phoneNumber="9876126634" />
    // </div>
    // <div>
    //   {/* <Laptop
    //     name="Gigabyte"
    //     price={100000}
    //     ram="8gb"
    //     processer="Nvdia"
    //     gpu="rtx360"
    //   >
    //     <h1>This is laptop's Infromation</h1>
    //   </Laptop>
    //   <TernaryOpt />
    //   <p style={{ color: "white", backgroundColor: "green" }}>success</p>
    //   <p style={{ color: "white", backgroundColor: "red" }}>fail</p>
    //   <p className="success">sucess 1</p>
    //   <p className="error">error 1</p>
    //   <Image /> */}
    //   {/* inbuilt props arent supported in customtags / components */}
    //   {/* <ButtonClick /> */}
    //   {/* <LearnMap1 /> */}
    // </div>
    <>
      {/* <LearnMap1></LearnMap1> */}
      {/* <LearnMap2></LearnMap2> */}
      {/*        <LearnUseStateHooks /> */}
      {/*    <LearnUseStateHooks2 /> */}
      {/*   <LearnUseState3 />
      <LearnUseStateHooks4 /> */}
      {/*       <LearnJson /> */}
      {/*  <DWNavLink></DWNavLink>
      <DWRoute></DWRoute> */}
      {/*   <AddToLocalStorage></AddToLocalStorage>
      <GetLocalStorage></GetLocalStorage>
      <RemoveLocalStorage></RemoveLocalStorage> */}
      {/*    <AddDataToSessionStorage></AddDataToSessionStorage>
      <GetSessionStorage></GetSessionStorage>
      <RemoveSession></RemoveSession> */}
      {/*       <LearnJsonStrParse></LearnJsonStrParse> */}
      <Form1></Form1>
    </>
  );
};

export default App;
