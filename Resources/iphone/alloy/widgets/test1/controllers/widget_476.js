function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_476";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_476 = Ti.UI.createView({
        id: "widget_476"
    });
    $.__views.widget_476 && $.addTopLevelView($.__views.widget_476);
    $.__views.__alloyId10920 = Ti.UI.createView({
        id: "__alloyId10920"
    });
    $.__views.widget_476.add($.__views.__alloyId10920);
    $.__views.__alloyId10921 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10921"
    });
    $.__views.__alloyId10920.add($.__views.__alloyId10921);
    $.__views.__alloyId10922 = Ti.UI.createView({
        id: "__alloyId10922"
    });
    $.__views.__alloyId10922 && $.addTopLevelView($.__views.__alloyId10922);
    $.__views.__alloyId10923 = Ti.UI.createView({
        id: "__alloyId10923"
    });
    $.__views.__alloyId10922.add($.__views.__alloyId10923);
    $.__views.__alloyId10924 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10924"
    });
    $.__views.__alloyId10923.add($.__views.__alloyId10924);
    $.__views.__alloyId10925 = Ti.UI.createView({
        id: "__alloyId10925"
    });
    $.__views.__alloyId10925 && $.addTopLevelView($.__views.__alloyId10925);
    $.__views.__alloyId10926 = Ti.UI.createView({
        id: "__alloyId10926"
    });
    $.__views.__alloyId10925.add($.__views.__alloyId10926);
    $.__views.__alloyId10927 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10927"
    });
    $.__views.__alloyId10926.add($.__views.__alloyId10927);
    $.__views.__alloyId10928 = Ti.UI.createView({
        id: "__alloyId10928"
    });
    $.__views.__alloyId10928 && $.addTopLevelView($.__views.__alloyId10928);
    $.__views.__alloyId10929 = Ti.UI.createView({
        id: "__alloyId10929"
    });
    $.__views.__alloyId10928.add($.__views.__alloyId10929);
    $.__views.__alloyId10930 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10930"
    });
    $.__views.__alloyId10929.add($.__views.__alloyId10930);
    $.__views.__alloyId10931 = Ti.UI.createView({
        id: "__alloyId10931"
    });
    $.__views.__alloyId10931 && $.addTopLevelView($.__views.__alloyId10931);
    $.__views.__alloyId10932 = Ti.UI.createView({
        id: "__alloyId10932"
    });
    $.__views.__alloyId10931.add($.__views.__alloyId10932);
    $.__views.__alloyId10933 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10933"
    });
    $.__views.__alloyId10932.add($.__views.__alloyId10933);
    $.__views.__alloyId10934 = Ti.UI.createView({
        id: "__alloyId10934"
    });
    $.__views.__alloyId10934 && $.addTopLevelView($.__views.__alloyId10934);
    $.__views.__alloyId10935 = Ti.UI.createView({
        id: "__alloyId10935"
    });
    $.__views.__alloyId10934.add($.__views.__alloyId10935);
    $.__views.__alloyId10936 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10936"
    });
    $.__views.__alloyId10935.add($.__views.__alloyId10936);
    $.__views.__alloyId10937 = Ti.UI.createView({
        id: "__alloyId10937"
    });
    $.__views.__alloyId10937 && $.addTopLevelView($.__views.__alloyId10937);
    $.__views.__alloyId10938 = Ti.UI.createView({
        id: "__alloyId10938"
    });
    $.__views.__alloyId10937.add($.__views.__alloyId10938);
    $.__views.__alloyId10939 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10939"
    });
    $.__views.__alloyId10938.add($.__views.__alloyId10939);
    $.__views.__alloyId10940 = Ti.UI.createView({
        id: "__alloyId10940"
    });
    $.__views.__alloyId10940 && $.addTopLevelView($.__views.__alloyId10940);
    $.__views.__alloyId10941 = Ti.UI.createView({
        id: "__alloyId10941"
    });
    $.__views.__alloyId10940.add($.__views.__alloyId10941);
    $.__views.__alloyId10942 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10942"
    });
    $.__views.__alloyId10941.add($.__views.__alloyId10942);
    $.__views.__alloyId10943 = Ti.UI.createView({
        id: "__alloyId10943"
    });
    $.__views.__alloyId10943 && $.addTopLevelView($.__views.__alloyId10943);
    $.__views.__alloyId10944 = Ti.UI.createView({
        id: "__alloyId10944"
    });
    $.__views.__alloyId10943.add($.__views.__alloyId10944);
    $.__views.__alloyId10945 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10945"
    });
    $.__views.__alloyId10944.add($.__views.__alloyId10945);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;