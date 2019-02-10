(function () {
    "use strict";

    function ProductImage(props) {
        return <img src={`../assets/${props.color}.jpg`} alt="Product image" />
    }

    function SizeSelector(props) {
        function sizeOptions() {
            return props.sizes.map(function (num) {
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

    function ColorSelector(props) {
        function colorOptions() {
            return props.colors.map(function (name) {
                return (
                    <option value={name} key={name}>{name}</option>
                );
            });
        }
        return (
            <div className="select-group">
                <label htmlFor="color-options">Color: </label>
                <select defaultValue={props.color} name="colorOptions" id="color-options">
                    {colorOptions()}
                </select>
            </div>
        )
    }

    var ProductCustomizer = createReactClass({
        getInitialState: function () {
            var sizes = window.Inventory.allSizes,
                colors = window.Inventory.allColors;

            return {
                size: 4,
                sizes: sizes,
                color: "blue",
                colors: colors
            };
        },
        render: function () {
            return (
                <div className="customizer">
                    <div className="product-image">
                        <ProductImage color={this.state.color} />
                    </div>
                    <div className="selector">
                        <SizeSelector
                            size={this.state.size}
                            sizes={this.state.sizes}
                        />
                        <ColorSelector
                            color={this.state.color}
                            colors={this.state.colors}
                        />
                    </div>
                </div>
            )
        }

    });

    ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"))
})();