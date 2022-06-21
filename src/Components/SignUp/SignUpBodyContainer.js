import styled from "styled-components";

const SignUpContainer = styled.div`
   position: absolute;
   display: flex;
   justify-content: center;
   top: 10%;
   left: ${(prop) => prop.left};
   z-index: ${(prop) => prop.z_index};
   width: 100%;
   height: 65%;
   transition: 0.8s ease all;
   border: 2px solid red;
`;
export default SignUpContainer;
