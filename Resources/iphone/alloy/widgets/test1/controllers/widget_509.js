function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_509";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_509 = Ti.UI.createView({
        id: "widget_509"
    });
    $.__views.widget_509 && $.addTopLevelView($.__views.widget_509);
    $.__views.__alloyId11882 = Ti.UI.createView({
        id: "__alloyId11882"
    });
    $.__views.widget_509.add($.__views.__alloyId11882);
    $.__views.__alloyId11883 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11883"
    });
    $.__views.__alloyId11882.add($.__views.__alloyId11883);
    $.__views.__alloyId11884 = Ti.UI.createView({
        id: "__alloyId11884"
    });
    $.__views.__alloyId11884 && $.addTopLevelView($.__views.__alloyId11884);
    $.__views.__alloyId11885 = Ti.UI.createView({
        id: "__alloyId11885"
    });
    $.__views.__alloyId11884.add($.__views.__alloyId11885);
    $.__views.__alloyId11886 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11886"
    });
    $.__views.__alloyId11885.add($.__views.__alloyId11886);
    $.__views.__alloyId11887 = Ti.UI.createView({
        id: "__alloyId11887"
    });
    $.__views.__alloyId11887 && $.addTopLevelView($.__views.__alloyId11887);
    $.__views.__alloyId11888 = Ti.UI.createView({
        id: "__alloyId11888"
    });
    $.__views.__alloyId11887.add($.__views.__alloyId11888);
    $.__views.__alloyId11889 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11889"
    });
    $.__views.__alloyId11888.add($.__views.__alloyId11889);
    $.__views.__alloyId11890 = Ti.UI.createView({
        id: "__alloyId11890"
    });
    $.__views.__alloyId11890 && $.addTopLevelView($.__views.__alloyId11890);
    $.__views.__alloyId11891 = Ti.UI.createView({
        id: "__alloyId11891"
    });
    $.__views.__alloyId11890.add($.__views.__alloyId11891);
    $.__views.__alloyId11892 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11892"
    });
    $.__views.__alloyId11891.add($.__views.__alloyId11892);
    $.__views.__alloyId11893 = Ti.UI.createView({
        id: "__alloyId11893"
    });
    $.__views.__alloyId11893 && $.addTopLevelView($.__views.__alloyId11893);
    $.__views.__alloyId11894 = Ti.UI.createView({
        id: "__alloyId11894"
    });
    $.__views.__alloyId11893.add($.__views.__alloyId11894);
    $.__views.__alloyId11895 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11895"
    });
    $.__views.__alloyId11894.add($.__views.__alloyId11895);
    $.__views.__alloyId11896 = Ti.UI.createView({
        id: "__alloyId11896"
    });
    $.__views.__alloyId11896 && $.addTopLevelView($.__views.__alloyId11896);
    $.__views.__alloyId11897 = Ti.UI.createView({
        id: "__alloyId11897"
    });
    $.__views.__alloyId11896.add($.__views.__alloyId11897);
    $.__views.__alloyId11898 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11898"
    });
    $.__views.__alloyId11897.add($.__views.__alloyId11898);
    $.__views.__alloyId11899 = Ti.UI.createView({
        id: "__alloyId11899"
    });
    $.__views.__alloyId11899 && $.addTopLevelView($.__views.__alloyId11899);
    $.__views.__alloyId11900 = Ti.UI.createView({
        id: "__alloyId11900"
    });
    $.__views.__alloyId11899.add($.__views.__alloyId11900);
    $.__views.__alloyId11901 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11901"
    });
    $.__views.__alloyId11900.add($.__views.__alloyId11901);
    $.__views.__alloyId11902 = Ti.UI.createView({
        id: "__alloyId11902"
    });
    $.__views.__alloyId11902 && $.addTopLevelView($.__views.__alloyId11902);
    $.__views.__alloyId11903 = Ti.UI.createView({
        id: "__alloyId11903"
    });
    $.__views.__alloyId11902.add($.__views.__alloyId11903);
    $.__views.__alloyId11904 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11904"
    });
    $.__views.__alloyId11903.add($.__views.__alloyId11904);
    $.__views.__alloyId11905 = Ti.UI.createView({
        id: "__alloyId11905"
    });
    $.__views.__alloyId11905 && $.addTopLevelView($.__views.__alloyId11905);
    $.__views.__alloyId11906 = Ti.UI.createView({
        id: "__alloyId11906"
    });
    $.__views.__alloyId11905.add($.__views.__alloyId11906);
    $.__views.__alloyId11907 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11907"
    });
    $.__views.__alloyId11906.add($.__views.__alloyId11907);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;