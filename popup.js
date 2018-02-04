$(document).ready(init);

function init() {
    $('#same').click(function() {
        var money = $('#money').val();
        console.log(money)
        chrome.storage.sync.set({ 'money': money });
    });
}
