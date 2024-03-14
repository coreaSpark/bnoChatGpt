window.onload = function(){

}

function requestFn(){
    let questionContents = $('#question').val()

    if(!questionContents){
        alert('질문을 입력해 주세요');
        return
    }

    let paramMap = {
        "prompt": questionContents
    }

    $.ajax({
        url: '/test',
        method: 'post',
        data: JSON.stringify(paramMap),
        contentType: 'application/json;charset=UTF-8',
        dataType: 'json',
        success: function(res){

            if(res.choices){
                let responseAnswer = res.choices[0].text
                $('#answer').val(responseAnswer)
            }else{
                alert('답변을 데끼나이데스');
            }
        }
    })
}

function resetFn(){
    $('#question').val('')
    $('#answer').val('')
}
