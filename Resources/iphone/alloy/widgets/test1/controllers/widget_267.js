function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_267";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_267 = Ti.UI.createView({
        id: "widget_267"
    });
    $.__views.widget_267 && $.addTopLevelView($.__views.widget_267);
    $.__views.__alloyId4888 = Ti.UI.createView({
        id: "__alloyId4888"
    });
    $.__views.widget_267.add($.__views.__alloyId4888);
    $.__views.__alloyId4889 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4889"
    });
    $.__views.__alloyId4888.add($.__views.__alloyId4889);
    $.__views.__alloyId4890 = Ti.UI.createView({
        id: "__alloyId4890"
    });
    $.__views.__alloyId4890 && $.addTopLevelView($.__views.__alloyId4890);
    $.__views.__alloyId4891 = Ti.UI.createView({
        id: "__alloyId4891"
    });
    $.__views.__alloyId4890.add($.__views.__alloyId4891);
    $.__views.__alloyId4892 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4892"
    });
    $.__views.__alloyId4891.add($.__views.__alloyId4892);
    $.__views.__alloyId4893 = Ti.UI.createView({
        id: "__alloyId4893"
    });
    $.__views.__alloyId4893 && $.addTopLevelView($.__views.__alloyId4893);
    $.__views.__alloyId4894 = Ti.UI.createView({
        id: "__alloyId4894"
    });
    $.__views.__alloyId4893.add($.__views.__alloyId4894);
    $.__views.__alloyId4895 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4895"
    });
    $.__views.__alloyId4894.add($.__views.__alloyId4895);
    $.__views.__alloyId4896 = Ti.UI.createView({
        id: "__alloyId4896"
    });
    $.__views.__alloyId4896 && $.addTopLevelView($.__views.__alloyId4896);
    $.__views.__alloyId4897 = Ti.UI.createView({
        id: "__alloyId4897"
    });
    $.__views.__alloyId4896.add($.__views.__alloyId4897);
    $.__views.__alloyId4898 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4898"
    });
    $.__views.__alloyId4897.add($.__views.__alloyId4898);
    $.__views.__alloyId4899 = Ti.UI.createView({
        id: "__alloyId4899"
    });
    $.__views.__alloyId4899 && $.addTopLevelView($.__views.__alloyId4899);
    $.__views.__alloyId4900 = Ti.UI.createView({
        id: "__alloyId4900"
    });
    $.__views.__alloyId4899.add($.__views.__alloyId4900);
    $.__views.__alloyId4901 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4901"
    });
    $.__views.__alloyId4900.add($.__views.__alloyId4901);
    $.__views.__alloyId4902 = Ti.UI.createView({
        id: "__alloyId4902"
    });
    $.__views.__alloyId4902 && $.addTopLevelView($.__views.__alloyId4902);
    $.__views.__alloyId4903 = Ti.UI.createView({
        id: "__alloyId4903"
    });
    $.__views.__alloyId4902.add($.__views.__alloyId4903);
    $.__views.__alloyId4904 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4904"
    });
    $.__views.__alloyId4903.add($.__views.__alloyId4904);
    $.__views.__alloyId4905 = Ti.UI.createView({
        id: "__alloyId4905"
    });
    $.__views.__alloyId4905 && $.addTopLevelView($.__views.__alloyId4905);
    $.__views.__alloyId4906 = Ti.UI.createView({
        id: "__alloyId4906"
    });
    $.__views.__alloyId4905.add($.__views.__alloyId4906);
    $.__views.__alloyId4907 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4907"
    });
    $.__views.__alloyId4906.add($.__views.__alloyId4907);
    $.__views.__alloyId4908 = Ti.UI.createView({
        id: "__alloyId4908"
    });
    $.__views.__alloyId4908 && $.addTopLevelView($.__views.__alloyId4908);
    $.__views.__alloyId4909 = Ti.UI.createView({
        id: "__alloyId4909"
    });
    $.__views.__alloyId4908.add($.__views.__alloyId4909);
    $.__views.__alloyId4910 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4910"
    });
    $.__views.__alloyId4909.add($.__views.__alloyId4910);
    $.__views.__alloyId4911 = Ti.UI.createView({
        id: "__alloyId4911"
    });
    $.__views.__alloyId4911 && $.addTopLevelView($.__views.__alloyId4911);
    $.__views.__alloyId4912 = Ti.UI.createView({
        id: "__alloyId4912"
    });
    $.__views.__alloyId4911.add($.__views.__alloyId4912);
    $.__views.__alloyId4913 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4913"
    });
    $.__views.__alloyId4912.add($.__views.__alloyId4913);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;