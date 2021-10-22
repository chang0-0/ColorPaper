import styled from "styled-components";

function AuthTemplate({ title, children }) {
  return (
    <Block>
      <div className="wrapper">
        <h1>{title}</h1>
        {children}
      </div>
    </Block>
  );
}

const Block = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-left: 140px;

  h1 {
    margin-top: 0;
    margin-bottom: 48px;
  }

  .wrapper {
    width: 480px;
  }
`;

export default AuthTemplate;
