import styled from "styled-components";

const SignUpContainer = styled.div`
   position: absolute;
   display: flex;
   justify-content: center;
   top: 10%;
   left: ${(prop) => prop.left};
   z-index: ${(prop) => prop.z_index};
   width: 100%;
   height: 80%;
   transition: 0.8s ease all;
`;
export default SignUpContainer;