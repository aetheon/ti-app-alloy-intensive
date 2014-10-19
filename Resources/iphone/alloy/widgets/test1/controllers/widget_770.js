function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_770";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_770 = Ti.UI.createView({
        id: "widget_770"
    });
    $.__views.widget_770 && $.addTopLevelView($.__views.widget_770);
    $.__views.__alloyId19422 = Ti.UI.createView({
        id: "__alloyId19422"
    });
    $.__views.widget_770.add($.__views.__alloyId19422);
    $.__views.__alloyId19423 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19423"
    });
    $.__views.__alloyId19422.add($.__views.__alloyId19423);
    $.__views.__alloyId19424 = Ti.UI.createView({
        id: "__alloyId19424"
    });
    $.__views.__alloyId19424 && $.addTopLevelView($.__views.__alloyId19424);
    $.__views.__alloyId19425 = Ti.UI.createView({
        id: "__alloyId19425"
    });
    $.__views.__alloyId19424.add($.__views.__alloyId19425);
    $.__views.__alloyId19426 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19426"
    });
    $.__views.__alloyId19425.add($.__views.__alloyId19426);
    $.__views.__alloyId19427 = Ti.UI.createView({
        id: "__alloyId19427"
    });
    $.__views.__alloyId19427 && $.addTopLevelView($.__views.__alloyId19427);
    $.__views.__alloyId19428 = Ti.UI.createView({
        id: "__alloyId19428"
    });
    $.__views.__alloyId19427.add($.__views.__alloyId19428);
    $.__views.__alloyId19429 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19429"
    });
    $.__views.__alloyId19428.add($.__views.__alloyId19429);
    $.__views.__alloyId19430 = Ti.UI.createView({
        id: "__alloyId19430"
    });
    $.__views.__alloyId19430 && $.addTopLevelView($.__views.__alloyId19430);
    $.__views.__alloyId19431 = Ti.UI.createView({
        id: "__alloyId19431"
    });
    $.__views.__alloyId19430.add($.__views.__alloyId19431);
    $.__views.__alloyId19432 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19432"
    });
    $.__views.__alloyId19431.add($.__views.__alloyId19432);
    $.__views.__alloyId19433 = Ti.UI.createView({
        id: "__alloyId19433"
    });
    $.__views.__alloyId19433 && $.addTopLevelView($.__views.__alloyId19433);
    $.__views.__alloyId19434 = Ti.UI.createView({
        id: "__alloyId19434"
    });
    $.__views.__alloyId19433.add($.__views.__alloyId19434);
    $.__views.__alloyId19435 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19435"
    });
    $.__views.__alloyId19434.add($.__views.__alloyId19435);
    $.__views.__alloyId19436 = Ti.UI.createView({
        id: "__alloyId19436"
    });
    $.__views.__alloyId19436 && $.addTopLevelView($.__views.__alloyId19436);
    $.__views.__alloyId19437 = Ti.UI.createView({
        id: "__alloyId19437"
    });
    $.__views.__alloyId19436.add($.__views.__alloyId19437);
    $.__views.__alloyId19438 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19438"
    });
    $.__views.__alloyId19437.add($.__views.__alloyId19438);
    $.__views.__alloyId19439 = Ti.UI.createView({
        id: "__alloyId19439"
    });
    $.__views.__alloyId19439 && $.addTopLevelView($.__views.__alloyId19439);
    $.__views.__alloyId19440 = Ti.UI.createView({
        id: "__alloyId19440"
    });
    $.__views.__alloyId19439.add($.__views.__alloyId19440);
    $.__views.__alloyId19441 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19441"
    });
    $.__views.__alloyId19440.add($.__views.__alloyId19441);
    $.__views.__alloyId19442 = Ti.UI.createView({
        id: "__alloyId19442"
    });
    $.__views.__alloyId19442 && $.addTopLevelView($.__views.__alloyId19442);
    $.__views.__alloyId19443 = Ti.UI.createView({
        id: "__alloyId19443"
    });
    $.__views.__alloyId19442.add($.__views.__alloyId19443);
    $.__views.__alloyId19444 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19444"
    });
    $.__views.__alloyId19443.add($.__views.__alloyId19444);
    $.__views.__alloyId19445 = Ti.UI.createView({
        id: "__alloyId19445"
    });
    $.__views.__alloyId19445 && $.addTopLevelView($.__views.__alloyId19445);
    $.__views.__alloyId19446 = Ti.UI.createView({
        id: "__alloyId19446"
    });
    $.__views.__alloyId19445.add($.__views.__alloyId19446);
    $.__views.__alloyId19447 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19447"
    });
    $.__views.__alloyId19446.add($.__views.__alloyId19447);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;