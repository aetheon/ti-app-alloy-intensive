function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_269";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_269 = Ti.UI.createView({
        id: "widget_269"
    });
    $.__views.widget_269 && $.addTopLevelView($.__views.widget_269);
    $.__views.__alloyId4940 = Ti.UI.createView({
        id: "__alloyId4940"
    });
    $.__views.widget_269.add($.__views.__alloyId4940);
    $.__views.__alloyId4941 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4941"
    });
    $.__views.__alloyId4940.add($.__views.__alloyId4941);
    $.__views.__alloyId4942 = Ti.UI.createView({
        id: "__alloyId4942"
    });
    $.__views.__alloyId4942 && $.addTopLevelView($.__views.__alloyId4942);
    $.__views.__alloyId4943 = Ti.UI.createView({
        id: "__alloyId4943"
    });
    $.__views.__alloyId4942.add($.__views.__alloyId4943);
    $.__views.__alloyId4944 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4944"
    });
    $.__views.__alloyId4943.add($.__views.__alloyId4944);
    $.__views.__alloyId4945 = Ti.UI.createView({
        id: "__alloyId4945"
    });
    $.__views.__alloyId4945 && $.addTopLevelView($.__views.__alloyId4945);
    $.__views.__alloyId4946 = Ti.UI.createView({
        id: "__alloyId4946"
    });
    $.__views.__alloyId4945.add($.__views.__alloyId4946);
    $.__views.__alloyId4947 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4947"
    });
    $.__views.__alloyId4946.add($.__views.__alloyId4947);
    $.__views.__alloyId4948 = Ti.UI.createView({
        id: "__alloyId4948"
    });
    $.__views.__alloyId4948 && $.addTopLevelView($.__views.__alloyId4948);
    $.__views.__alloyId4949 = Ti.UI.createView({
        id: "__alloyId4949"
    });
    $.__views.__alloyId4948.add($.__views.__alloyId4949);
    $.__views.__alloyId4950 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4950"
    });
    $.__views.__alloyId4949.add($.__views.__alloyId4950);
    $.__views.__alloyId4951 = Ti.UI.createView({
        id: "__alloyId4951"
    });
    $.__views.__alloyId4951 && $.addTopLevelView($.__views.__alloyId4951);
    $.__views.__alloyId4952 = Ti.UI.createView({
        id: "__alloyId4952"
    });
    $.__views.__alloyId4951.add($.__views.__alloyId4952);
    $.__views.__alloyId4953 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4953"
    });
    $.__views.__alloyId4952.add($.__views.__alloyId4953);
    $.__views.__alloyId4954 = Ti.UI.createView({
        id: "__alloyId4954"
    });
    $.__views.__alloyId4954 && $.addTopLevelView($.__views.__alloyId4954);
    $.__views.__alloyId4955 = Ti.UI.createView({
        id: "__alloyId4955"
    });
    $.__views.__alloyId4954.add($.__views.__alloyId4955);
    $.__views.__alloyId4956 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4956"
    });
    $.__views.__alloyId4955.add($.__views.__alloyId4956);
    $.__views.__alloyId4957 = Ti.UI.createView({
        id: "__alloyId4957"
    });
    $.__views.__alloyId4957 && $.addTopLevelView($.__views.__alloyId4957);
    $.__views.__alloyId4958 = Ti.UI.createView({
        id: "__alloyId4958"
    });
    $.__views.__alloyId4957.add($.__views.__alloyId4958);
    $.__views.__alloyId4959 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4959"
    });
    $.__views.__alloyId4958.add($.__views.__alloyId4959);
    $.__views.__alloyId4960 = Ti.UI.createView({
        id: "__alloyId4960"
    });
    $.__views.__alloyId4960 && $.addTopLevelView($.__views.__alloyId4960);
    $.__views.__alloyId4961 = Ti.UI.createView({
        id: "__alloyId4961"
    });
    $.__views.__alloyId4960.add($.__views.__alloyId4961);
    $.__views.__alloyId4962 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4962"
    });
    $.__views.__alloyId4961.add($.__views.__alloyId4962);
    $.__views.__alloyId4963 = Ti.UI.createView({
        id: "__alloyId4963"
    });
    $.__views.__alloyId4963 && $.addTopLevelView($.__views.__alloyId4963);
    $.__views.__alloyId4964 = Ti.UI.createView({
        id: "__alloyId4964"
    });
    $.__views.__alloyId4963.add($.__views.__alloyId4964);
    $.__views.__alloyId4965 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4965"
    });
    $.__views.__alloyId4964.add($.__views.__alloyId4965);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;