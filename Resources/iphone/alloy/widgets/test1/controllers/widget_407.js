function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_407";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_407 = Ti.UI.createView({
        id: "widget_407"
    });
    $.__views.widget_407 && $.addTopLevelView($.__views.widget_407);
    $.__views.__alloyId8944 = Ti.UI.createView({
        id: "__alloyId8944"
    });
    $.__views.widget_407.add($.__views.__alloyId8944);
    $.__views.__alloyId8945 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8945"
    });
    $.__views.__alloyId8944.add($.__views.__alloyId8945);
    $.__views.__alloyId8946 = Ti.UI.createView({
        id: "__alloyId8946"
    });
    $.__views.__alloyId8946 && $.addTopLevelView($.__views.__alloyId8946);
    $.__views.__alloyId8947 = Ti.UI.createView({
        id: "__alloyId8947"
    });
    $.__views.__alloyId8946.add($.__views.__alloyId8947);
    $.__views.__alloyId8948 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8948"
    });
    $.__views.__alloyId8947.add($.__views.__alloyId8948);
    $.__views.__alloyId8949 = Ti.UI.createView({
        id: "__alloyId8949"
    });
    $.__views.__alloyId8949 && $.addTopLevelView($.__views.__alloyId8949);
    $.__views.__alloyId8950 = Ti.UI.createView({
        id: "__alloyId8950"
    });
    $.__views.__alloyId8949.add($.__views.__alloyId8950);
    $.__views.__alloyId8951 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8951"
    });
    $.__views.__alloyId8950.add($.__views.__alloyId8951);
    $.__views.__alloyId8952 = Ti.UI.createView({
        id: "__alloyId8952"
    });
    $.__views.__alloyId8952 && $.addTopLevelView($.__views.__alloyId8952);
    $.__views.__alloyId8953 = Ti.UI.createView({
        id: "__alloyId8953"
    });
    $.__views.__alloyId8952.add($.__views.__alloyId8953);
    $.__views.__alloyId8954 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8954"
    });
    $.__views.__alloyId8953.add($.__views.__alloyId8954);
    $.__views.__alloyId8955 = Ti.UI.createView({
        id: "__alloyId8955"
    });
    $.__views.__alloyId8955 && $.addTopLevelView($.__views.__alloyId8955);
    $.__views.__alloyId8956 = Ti.UI.createView({
        id: "__alloyId8956"
    });
    $.__views.__alloyId8955.add($.__views.__alloyId8956);
    $.__views.__alloyId8957 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8957"
    });
    $.__views.__alloyId8956.add($.__views.__alloyId8957);
    $.__views.__alloyId8958 = Ti.UI.createView({
        id: "__alloyId8958"
    });
    $.__views.__alloyId8958 && $.addTopLevelView($.__views.__alloyId8958);
    $.__views.__alloyId8959 = Ti.UI.createView({
        id: "__alloyId8959"
    });
    $.__views.__alloyId8958.add($.__views.__alloyId8959);
    $.__views.__alloyId8960 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8960"
    });
    $.__views.__alloyId8959.add($.__views.__alloyId8960);
    $.__views.__alloyId8961 = Ti.UI.createView({
        id: "__alloyId8961"
    });
    $.__views.__alloyId8961 && $.addTopLevelView($.__views.__alloyId8961);
    $.__views.__alloyId8962 = Ti.UI.createView({
        id: "__alloyId8962"
    });
    $.__views.__alloyId8961.add($.__views.__alloyId8962);
    $.__views.__alloyId8963 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8963"
    });
    $.__views.__alloyId8962.add($.__views.__alloyId8963);
    $.__views.__alloyId8964 = Ti.UI.createView({
        id: "__alloyId8964"
    });
    $.__views.__alloyId8964 && $.addTopLevelView($.__views.__alloyId8964);
    $.__views.__alloyId8965 = Ti.UI.createView({
        id: "__alloyId8965"
    });
    $.__views.__alloyId8964.add($.__views.__alloyId8965);
    $.__views.__alloyId8966 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8966"
    });
    $.__views.__alloyId8965.add($.__views.__alloyId8966);
    $.__views.__alloyId8967 = Ti.UI.createView({
        id: "__alloyId8967"
    });
    $.__views.__alloyId8967 && $.addTopLevelView($.__views.__alloyId8967);
    $.__views.__alloyId8968 = Ti.UI.createView({
        id: "__alloyId8968"
    });
    $.__views.__alloyId8967.add($.__views.__alloyId8968);
    $.__views.__alloyId8969 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8969"
    });
    $.__views.__alloyId8968.add($.__views.__alloyId8969);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;