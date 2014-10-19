function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_233";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_233 = Ti.UI.createView({
        id: "widget_233"
    });
    $.__views.widget_233 && $.addTopLevelView($.__views.widget_233);
    $.__views.__alloyId3926 = Ti.UI.createView({
        id: "__alloyId3926"
    });
    $.__views.widget_233.add($.__views.__alloyId3926);
    $.__views.__alloyId3927 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3927"
    });
    $.__views.__alloyId3926.add($.__views.__alloyId3927);
    $.__views.__alloyId3928 = Ti.UI.createView({
        id: "__alloyId3928"
    });
    $.__views.__alloyId3928 && $.addTopLevelView($.__views.__alloyId3928);
    $.__views.__alloyId3929 = Ti.UI.createView({
        id: "__alloyId3929"
    });
    $.__views.__alloyId3928.add($.__views.__alloyId3929);
    $.__views.__alloyId3930 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3930"
    });
    $.__views.__alloyId3929.add($.__views.__alloyId3930);
    $.__views.__alloyId3931 = Ti.UI.createView({
        id: "__alloyId3931"
    });
    $.__views.__alloyId3931 && $.addTopLevelView($.__views.__alloyId3931);
    $.__views.__alloyId3932 = Ti.UI.createView({
        id: "__alloyId3932"
    });
    $.__views.__alloyId3931.add($.__views.__alloyId3932);
    $.__views.__alloyId3933 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3933"
    });
    $.__views.__alloyId3932.add($.__views.__alloyId3933);
    $.__views.__alloyId3934 = Ti.UI.createView({
        id: "__alloyId3934"
    });
    $.__views.__alloyId3934 && $.addTopLevelView($.__views.__alloyId3934);
    $.__views.__alloyId3935 = Ti.UI.createView({
        id: "__alloyId3935"
    });
    $.__views.__alloyId3934.add($.__views.__alloyId3935);
    $.__views.__alloyId3936 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3936"
    });
    $.__views.__alloyId3935.add($.__views.__alloyId3936);
    $.__views.__alloyId3937 = Ti.UI.createView({
        id: "__alloyId3937"
    });
    $.__views.__alloyId3937 && $.addTopLevelView($.__views.__alloyId3937);
    $.__views.__alloyId3938 = Ti.UI.createView({
        id: "__alloyId3938"
    });
    $.__views.__alloyId3937.add($.__views.__alloyId3938);
    $.__views.__alloyId3939 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3939"
    });
    $.__views.__alloyId3938.add($.__views.__alloyId3939);
    $.__views.__alloyId3940 = Ti.UI.createView({
        id: "__alloyId3940"
    });
    $.__views.__alloyId3940 && $.addTopLevelView($.__views.__alloyId3940);
    $.__views.__alloyId3941 = Ti.UI.createView({
        id: "__alloyId3941"
    });
    $.__views.__alloyId3940.add($.__views.__alloyId3941);
    $.__views.__alloyId3942 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3942"
    });
    $.__views.__alloyId3941.add($.__views.__alloyId3942);
    $.__views.__alloyId3943 = Ti.UI.createView({
        id: "__alloyId3943"
    });
    $.__views.__alloyId3943 && $.addTopLevelView($.__views.__alloyId3943);
    $.__views.__alloyId3944 = Ti.UI.createView({
        id: "__alloyId3944"
    });
    $.__views.__alloyId3943.add($.__views.__alloyId3944);
    $.__views.__alloyId3945 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3945"
    });
    $.__views.__alloyId3944.add($.__views.__alloyId3945);
    $.__views.__alloyId3946 = Ti.UI.createView({
        id: "__alloyId3946"
    });
    $.__views.__alloyId3946 && $.addTopLevelView($.__views.__alloyId3946);
    $.__views.__alloyId3947 = Ti.UI.createView({
        id: "__alloyId3947"
    });
    $.__views.__alloyId3946.add($.__views.__alloyId3947);
    $.__views.__alloyId3948 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3948"
    });
    $.__views.__alloyId3947.add($.__views.__alloyId3948);
    $.__views.__alloyId3949 = Ti.UI.createView({
        id: "__alloyId3949"
    });
    $.__views.__alloyId3949 && $.addTopLevelView($.__views.__alloyId3949);
    $.__views.__alloyId3950 = Ti.UI.createView({
        id: "__alloyId3950"
    });
    $.__views.__alloyId3949.add($.__views.__alloyId3950);
    $.__views.__alloyId3951 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3951"
    });
    $.__views.__alloyId3950.add($.__views.__alloyId3951);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;