const Button = ({ onClick, children }) => {
  // children predefined keyword in react that make us access the any content that we wrote in the Button component
  return (
    <button onClick={onClick}>
      {/* with this children prop we can pass whatever content that we want and the button component does not matter what we pass into 
      | use it to built a generic components  it does not know what is the content that come and what that display*/}
      {children}
    </button>
  );
};
export default Button;
