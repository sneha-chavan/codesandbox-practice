function Closure() {
  function outerFunction(outer) {
    return function innerFunction(inner) {
      return (
        <div>
          <div>{console.log({ outer })}</div>
          <div>{console.log(`In inner function: "+ ${inner} `)}</div>
        </div>
      );
    };
  }

  const cc = outerFunction("outer function argument");
  cc("inner");
}
export default Closure;
