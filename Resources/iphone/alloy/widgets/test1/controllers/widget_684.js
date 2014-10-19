function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_684";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_684 = Ti.UI.createView({
        id: "widget_684"
    });
    $.__views.widget_684 && $.addTopLevelView($.__views.widget_684);
    $.__views.__alloyId16926 = Ti.UI.createView({
        id: "__alloyId16926"
    });
    $.__views.widget_684.add($.__views.__alloyId16926);
    $.__views.__alloyId16927 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16927"
    });
    $.__views.__alloyId16926.add($.__views.__alloyId16927);
    $.__views.__alloyId16928 = Ti.UI.createView({
        id: "__alloyId16928"
    });
    $.__views.__alloyId16928 && $.addTopLevelView($.__views.__alloyId16928);
    $.__views.__alloyId16929 = Ti.UI.createView({
        id: "__alloyId16929"
    });
    $.__views.__alloyId16928.add($.__views.__alloyId16929);
    $.__views.__alloyId16930 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16930"
    });
    $.__views.__alloyId16929.add($.__views.__alloyId16930);
    $.__views.__alloyId16931 = Ti.UI.createView({
        id: "__alloyId16931"
    });
    $.__views.__alloyId16931 && $.addTopLevelView($.__views.__alloyId16931);
    $.__views.__alloyId16932 = Ti.UI.createView({
        id: "__alloyId16932"
    });
    $.__views.__alloyId16931.add($.__views.__alloyId16932);
    $.__views.__alloyId16933 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16933"
    });
    $.__views.__alloyId16932.add($.__views.__alloyId16933);
    $.__views.__alloyId16934 = Ti.UI.createView({
        id: "__alloyId16934"
    });
    $.__views.__alloyId16934 && $.addTopLevelView($.__views.__alloyId16934);
    $.__views.__alloyId16935 = Ti.UI.createView({
        id: "__alloyId16935"
    });
    $.__views.__alloyId16934.add($.__views.__alloyId16935);
    $.__views.__alloyId16936 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16936"
    });
    $.__views.__alloyId16935.add($.__views.__alloyId16936);
    $.__views.__alloyId16937 = Ti.UI.createView({
        id: "__alloyId16937"
    });
    $.__views.__alloyId16937 && $.addTopLevelView($.__views.__alloyId16937);
    $.__views.__alloyId16938 = Ti.UI.createView({
        id: "__alloyId16938"
    });
    $.__views.__alloyId16937.add($.__views.__alloyId16938);
    $.__views.__alloyId16939 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16939"
    });
    $.__views.__alloyId16938.add($.__views.__alloyId16939);
    $.__views.__alloyId16940 = Ti.UI.createView({
        id: "__alloyId16940"
    });
    $.__views.__alloyId16940 && $.addTopLevelView($.__views.__alloyId16940);
    $.__views.__alloyId16941 = Ti.UI.createView({
        id: "__alloyId16941"
    });
    $.__views.__alloyId16940.add($.__views.__alloyId16941);
    $.__views.__alloyId16942 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16942"
    });
    $.__views.__alloyId16941.add($.__views.__alloyId16942);
    $.__views.__alloyId16943 = Ti.UI.createView({
        id: "__alloyId16943"
    });
    $.__views.__alloyId16943 && $.addTopLevelView($.__views.__alloyId16943);
    $.__views.__alloyId16944 = Ti.UI.createView({
        id: "__alloyId16944"
    });
    $.__views.__alloyId16943.add($.__views.__alloyId16944);
    $.__views.__alloyId16945 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16945"
    });
    $.__views.__alloyId16944.add($.__views.__alloyId16945);
    $.__views.__alloyId16946 = Ti.UI.createView({
        id: "__alloyId16946"
    });
    $.__views.__alloyId16946 && $.addTopLevelView($.__views.__alloyId16946);
    $.__views.__alloyId16947 = Ti.UI.createView({
        id: "__alloyId16947"
    });
    $.__views.__alloyId16946.add($.__views.__alloyId16947);
    $.__views.__alloyId16948 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16948"
    });
    $.__views.__alloyId16947.add($.__views.__alloyId16948);
    $.__views.__alloyId16949 = Ti.UI.createView({
        id: "__alloyId16949"
    });
    $.__views.__alloyId16949 && $.addTopLevelView($.__views.__alloyId16949);
    $.__views.__alloyId16950 = Ti.UI.createView({
        id: "__alloyId16950"
    });
    $.__views.__alloyId16949.add($.__views.__alloyId16950);
    $.__views.__alloyId16951 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16951"
    });
    $.__views.__alloyId16950.add($.__views.__alloyId16951);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;