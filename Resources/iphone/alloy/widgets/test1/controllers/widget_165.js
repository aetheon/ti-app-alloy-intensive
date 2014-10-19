function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_165";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_165 = Ti.UI.createView({
        id: "widget_165"
    });
    $.__views.widget_165 && $.addTopLevelView($.__views.widget_165);
    $.__views.__alloyId1950 = Ti.UI.createView({
        id: "__alloyId1950"
    });
    $.__views.widget_165.add($.__views.__alloyId1950);
    $.__views.__alloyId1951 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1951"
    });
    $.__views.__alloyId1950.add($.__views.__alloyId1951);
    $.__views.__alloyId1952 = Ti.UI.createView({
        id: "__alloyId1952"
    });
    $.__views.__alloyId1952 && $.addTopLevelView($.__views.__alloyId1952);
    $.__views.__alloyId1953 = Ti.UI.createView({
        id: "__alloyId1953"
    });
    $.__views.__alloyId1952.add($.__views.__alloyId1953);
    $.__views.__alloyId1954 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1954"
    });
    $.__views.__alloyId1953.add($.__views.__alloyId1954);
    $.__views.__alloyId1955 = Ti.UI.createView({
        id: "__alloyId1955"
    });
    $.__views.__alloyId1955 && $.addTopLevelView($.__views.__alloyId1955);
    $.__views.__alloyId1956 = Ti.UI.createView({
        id: "__alloyId1956"
    });
    $.__views.__alloyId1955.add($.__views.__alloyId1956);
    $.__views.__alloyId1957 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1957"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1957);
    $.__views.__alloyId1958 = Ti.UI.createView({
        id: "__alloyId1958"
    });
    $.__views.__alloyId1958 && $.addTopLevelView($.__views.__alloyId1958);
    $.__views.__alloyId1959 = Ti.UI.createView({
        id: "__alloyId1959"
    });
    $.__views.__alloyId1958.add($.__views.__alloyId1959);
    $.__views.__alloyId1960 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1960"
    });
    $.__views.__alloyId1959.add($.__views.__alloyId1960);
    $.__views.__alloyId1961 = Ti.UI.createView({
        id: "__alloyId1961"
    });
    $.__views.__alloyId1961 && $.addTopLevelView($.__views.__alloyId1961);
    $.__views.__alloyId1962 = Ti.UI.createView({
        id: "__alloyId1962"
    });
    $.__views.__alloyId1961.add($.__views.__alloyId1962);
    $.__views.__alloyId1963 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1963"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1963);
    $.__views.__alloyId1964 = Ti.UI.createView({
        id: "__alloyId1964"
    });
    $.__views.__alloyId1964 && $.addTopLevelView($.__views.__alloyId1964);
    $.__views.__alloyId1965 = Ti.UI.createView({
        id: "__alloyId1965"
    });
    $.__views.__alloyId1964.add($.__views.__alloyId1965);
    $.__views.__alloyId1966 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    $.__views.__alloyId1967 = Ti.UI.createView({
        id: "__alloyId1967"
    });
    $.__views.__alloyId1967 && $.addTopLevelView($.__views.__alloyId1967);
    $.__views.__alloyId1968 = Ti.UI.createView({
        id: "__alloyId1968"
    });
    $.__views.__alloyId1967.add($.__views.__alloyId1968);
    $.__views.__alloyId1969 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1969"
    });
    $.__views.__alloyId1968.add($.__views.__alloyId1969);
    $.__views.__alloyId1970 = Ti.UI.createView({
        id: "__alloyId1970"
    });
    $.__views.__alloyId1970 && $.addTopLevelView($.__views.__alloyId1970);
    $.__views.__alloyId1971 = Ti.UI.createView({
        id: "__alloyId1971"
    });
    $.__views.__alloyId1970.add($.__views.__alloyId1971);
    $.__views.__alloyId1972 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1972"
    });
    $.__views.__alloyId1971.add($.__views.__alloyId1972);
    $.__views.__alloyId1973 = Ti.UI.createView({
        id: "__alloyId1973"
    });
    $.__views.__alloyId1973 && $.addTopLevelView($.__views.__alloyId1973);
    $.__views.__alloyId1974 = Ti.UI.createView({
        id: "__alloyId1974"
    });
    $.__views.__alloyId1973.add($.__views.__alloyId1974);
    $.__views.__alloyId1975 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1975"
    });
    $.__views.__alloyId1974.add($.__views.__alloyId1975);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;