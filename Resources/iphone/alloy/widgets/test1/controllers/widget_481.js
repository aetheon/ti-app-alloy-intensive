function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_481";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_481 = Ti.UI.createView({
        id: "widget_481"
    });
    $.__views.widget_481 && $.addTopLevelView($.__views.widget_481);
    $.__views.__alloyId11076 = Ti.UI.createView({
        id: "__alloyId11076"
    });
    $.__views.widget_481.add($.__views.__alloyId11076);
    $.__views.__alloyId11077 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11077"
    });
    $.__views.__alloyId11076.add($.__views.__alloyId11077);
    $.__views.__alloyId11078 = Ti.UI.createView({
        id: "__alloyId11078"
    });
    $.__views.__alloyId11078 && $.addTopLevelView($.__views.__alloyId11078);
    $.__views.__alloyId11079 = Ti.UI.createView({
        id: "__alloyId11079"
    });
    $.__views.__alloyId11078.add($.__views.__alloyId11079);
    $.__views.__alloyId11080 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11080"
    });
    $.__views.__alloyId11079.add($.__views.__alloyId11080);
    $.__views.__alloyId11081 = Ti.UI.createView({
        id: "__alloyId11081"
    });
    $.__views.__alloyId11081 && $.addTopLevelView($.__views.__alloyId11081);
    $.__views.__alloyId11082 = Ti.UI.createView({
        id: "__alloyId11082"
    });
    $.__views.__alloyId11081.add($.__views.__alloyId11082);
    $.__views.__alloyId11083 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11083"
    });
    $.__views.__alloyId11082.add($.__views.__alloyId11083);
    $.__views.__alloyId11084 = Ti.UI.createView({
        id: "__alloyId11084"
    });
    $.__views.__alloyId11084 && $.addTopLevelView($.__views.__alloyId11084);
    $.__views.__alloyId11085 = Ti.UI.createView({
        id: "__alloyId11085"
    });
    $.__views.__alloyId11084.add($.__views.__alloyId11085);
    $.__views.__alloyId11086 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11086"
    });
    $.__views.__alloyId11085.add($.__views.__alloyId11086);
    $.__views.__alloyId11087 = Ti.UI.createView({
        id: "__alloyId11087"
    });
    $.__views.__alloyId11087 && $.addTopLevelView($.__views.__alloyId11087);
    $.__views.__alloyId11088 = Ti.UI.createView({
        id: "__alloyId11088"
    });
    $.__views.__alloyId11087.add($.__views.__alloyId11088);
    $.__views.__alloyId11089 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11089"
    });
    $.__views.__alloyId11088.add($.__views.__alloyId11089);
    $.__views.__alloyId11090 = Ti.UI.createView({
        id: "__alloyId11090"
    });
    $.__views.__alloyId11090 && $.addTopLevelView($.__views.__alloyId11090);
    $.__views.__alloyId11091 = Ti.UI.createView({
        id: "__alloyId11091"
    });
    $.__views.__alloyId11090.add($.__views.__alloyId11091);
    $.__views.__alloyId11092 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11092"
    });
    $.__views.__alloyId11091.add($.__views.__alloyId11092);
    $.__views.__alloyId11093 = Ti.UI.createView({
        id: "__alloyId11093"
    });
    $.__views.__alloyId11093 && $.addTopLevelView($.__views.__alloyId11093);
    $.__views.__alloyId11094 = Ti.UI.createView({
        id: "__alloyId11094"
    });
    $.__views.__alloyId11093.add($.__views.__alloyId11094);
    $.__views.__alloyId11095 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11095"
    });
    $.__views.__alloyId11094.add($.__views.__alloyId11095);
    $.__views.__alloyId11096 = Ti.UI.createView({
        id: "__alloyId11096"
    });
    $.__views.__alloyId11096 && $.addTopLevelView($.__views.__alloyId11096);
    $.__views.__alloyId11097 = Ti.UI.createView({
        id: "__alloyId11097"
    });
    $.__views.__alloyId11096.add($.__views.__alloyId11097);
    $.__views.__alloyId11098 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11098"
    });
    $.__views.__alloyId11097.add($.__views.__alloyId11098);
    $.__views.__alloyId11099 = Ti.UI.createView({
        id: "__alloyId11099"
    });
    $.__views.__alloyId11099 && $.addTopLevelView($.__views.__alloyId11099);
    $.__views.__alloyId11100 = Ti.UI.createView({
        id: "__alloyId11100"
    });
    $.__views.__alloyId11099.add($.__views.__alloyId11100);
    $.__views.__alloyId11101 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11101"
    });
    $.__views.__alloyId11100.add($.__views.__alloyId11101);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;