(function () {
    "use strict";

    function ProductImage(props) {
        return React.createElement("img", {
            src: "../assets/red.jpg",
            alt: "Product image"
        });
    }

    function ProductCusmomizer(props) {
        return React.createElement(
            "div",
            { className: "customizer" },
            React.createElement("div", { className: "product-image" }, React.createElement(ProductImage))
        );
    }

    ReactDOM.render(React.createElement(ProductCusmomizer), document.getElementById("react-root"))
})();