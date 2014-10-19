function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_681";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_681 = Ti.UI.createView({
        id: "widget_681"
    });
    $.__views.widget_681 && $.addTopLevelView($.__views.widget_681);
    $.__views.__alloyId16848 = Ti.UI.createView({
        id: "__alloyId16848"
    });
    $.__views.widget_681.add($.__views.__alloyId16848);
    $.__views.__alloyId16849 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16849"
    });
    $.__views.__alloyId16848.add($.__views.__alloyId16849);
    $.__views.__alloyId16850 = Ti.UI.createView({
        id: "__alloyId16850"
    });
    $.__views.__alloyId16850 && $.addTopLevelView($.__views.__alloyId16850);
    $.__views.__alloyId16851 = Ti.UI.createView({
        id: "__alloyId16851"
    });
    $.__views.__alloyId16850.add($.__views.__alloyId16851);
    $.__views.__alloyId16852 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16852"
    });
    $.__views.__alloyId16851.add($.__views.__alloyId16852);
    $.__views.__alloyId16853 = Ti.UI.createView({
        id: "__alloyId16853"
    });
    $.__views.__alloyId16853 && $.addTopLevelView($.__views.__alloyId16853);
    $.__views.__alloyId16854 = Ti.UI.createView({
        id: "__alloyId16854"
    });
    $.__views.__alloyId16853.add($.__views.__alloyId16854);
    $.__views.__alloyId16855 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16855"
    });
    $.__views.__alloyId16854.add($.__views.__alloyId16855);
    $.__views.__alloyId16856 = Ti.UI.createView({
        id: "__alloyId16856"
    });
    $.__views.__alloyId16856 && $.addTopLevelView($.__views.__alloyId16856);
    $.__views.__alloyId16857 = Ti.UI.createView({
        id: "__alloyId16857"
    });
    $.__views.__alloyId16856.add($.__views.__alloyId16857);
    $.__views.__alloyId16858 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16858"
    });
    $.__views.__alloyId16857.add($.__views.__alloyId16858);
    $.__views.__alloyId16859 = Ti.UI.createView({
        id: "__alloyId16859"
    });
    $.__views.__alloyId16859 && $.addTopLevelView($.__views.__alloyId16859);
    $.__views.__alloyId16860 = Ti.UI.createView({
        id: "__alloyId16860"
    });
    $.__views.__alloyId16859.add($.__views.__alloyId16860);
    $.__views.__alloyId16861 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16861"
    });
    $.__views.__alloyId16860.add($.__views.__alloyId16861);
    $.__views.__alloyId16862 = Ti.UI.createView({
        id: "__alloyId16862"
    });
    $.__views.__alloyId16862 && $.addTopLevelView($.__views.__alloyId16862);
    $.__views.__alloyId16863 = Ti.UI.createView({
        id: "__alloyId16863"
    });
    $.__views.__alloyId16862.add($.__views.__alloyId16863);
    $.__views.__alloyId16864 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16864"
    });
    $.__views.__alloyId16863.add($.__views.__alloyId16864);
    $.__views.__alloyId16865 = Ti.UI.createView({
        id: "__alloyId16865"
    });
    $.__views.__alloyId16865 && $.addTopLevelView($.__views.__alloyId16865);
    $.__views.__alloyId16866 = Ti.UI.createView({
        id: "__alloyId16866"
    });
    $.__views.__alloyId16865.add($.__views.__alloyId16866);
    $.__views.__alloyId16867 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16867"
    });
    $.__views.__alloyId16866.add($.__views.__alloyId16867);
    $.__views.__alloyId16868 = Ti.UI.createView({
        id: "__alloyId16868"
    });
    $.__views.__alloyId16868 && $.addTopLevelView($.__views.__alloyId16868);
    $.__views.__alloyId16869 = Ti.UI.createView({
        id: "__alloyId16869"
    });
    $.__views.__alloyId16868.add($.__views.__alloyId16869);
    $.__views.__alloyId16870 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16870"
    });
    $.__views.__alloyId16869.add($.__views.__alloyId16870);
    $.__views.__alloyId16871 = Ti.UI.createView({
        id: "__alloyId16871"
    });
    $.__views.__alloyId16871 && $.addTopLevelView($.__views.__alloyId16871);
    $.__views.__alloyId16872 = Ti.UI.createView({
        id: "__alloyId16872"
    });
    $.__views.__alloyId16871.add($.__views.__alloyId16872);
    $.__views.__alloyId16873 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16873"
    });
    $.__views.__alloyId16872.add($.__views.__alloyId16873);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;