(function () {
    "use strict";

    function ProductImage(props) {
        return <img src={`../assets/${props.color}.jpg`} alt="Product image" />
    }

    function SizeSelector(props) {
        function sizeOptions() {
            var sizes = window.Inventory.allSizes;
            return sizes.map(function (num) {
                return (
                    <option value={num} key={num}>{num}</option>
                );
            });
        }
        return (
            <div className="select-group">
                <label htmlFor="size-options">Size: </label>
                <select defaultValue={props.size} name="sizeOptions" id="size-options">
                    {sizeOptions()}
                </select>
            </div>
        )
    }

    function ProductCustomizer(props) {
        return (
            <div className="customizer">
                <div className="product-image">
                    <ProductImage color="blue" />
                </div>
                <div className="selector">
                    <SizeSelector size={4} />
                </div>
            </div>
        )
    }

    ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"))
})();