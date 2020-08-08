function render (data) {
  var html = "<div class='commentBox'><div class='leftPanelImg'><img src='../images/icon.png'/></div><div class='rightPanel'><span class = 'user'>"+data.name+"</span><p class= 'commenting'>"+data.body+"</p></div><div class='clear'></div></div>";
  $('#container').append(html);
}

$(document).ready(function() {

  var comment = [
    {"name": "Asyari Ammar", "body": "Good post to read, Thanks ^_^"}
  ];

  for(var i = 0; i < comment.length; i++) {
    render(comment[i]);
  }

  $('#addComment').click(function(){
    var addObj = {
      "name": $('#name').val(),
      "body": $('#bodyText').val()
    };
    comment.push(addObj);
    render(addObj);
    $('#name').val('');
    $('#bodyText').val('')
  });
});
