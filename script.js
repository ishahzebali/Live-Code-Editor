// Name: Shahzeb Ali
// Roll No: FA20-BSCS-416
// Section: 3
// Email: fa20-bscs-416@lgu.edu.pk



document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('output-frame');
    var codeSections = document.querySelectorAll('#code textarea');
    var resetButton = document.querySelector('.reset-button');

    function updateOutput() {
        try {
            iframe.srcdoc = `
                ${codeSections[0].value}
                <style>${codeSections[1].value}</style>
                <script>${codeSections[2].value}</script>`;
        } catch (error) {
            console.error('Error updating output:', error);
        }
    }

    function resetCode() {
        codeSections.forEach(function (textarea) {
            textarea.value = '';
        });
        updateOutput();
    }

    codeSections.forEach(function (textarea) {
        textarea.addEventListener('input', updateOutput);
    });

    resetButton.addEventListener('click', resetCode);


    var isResizing = false;
    var startX;

    document.addEventListener('mousemove', function (e) {
        if (isResizing) {
            var newWidth = document.body.clientWidth - e.clientX;
            document.getElementById('code').style.width = newWidth + 'px';
            updateOutput();
        }
    });

    document.getElementById('code').addEventListener('mousedown', function (e) {
        if (e.offsetX > this.offsetWidth - 10) {
            isResizing = true;
            startX = e.clientX;
        }
    });

    document.addEventListener('mouseup', function () {
        isResizing = false;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var textarea = document.querySelector('#html textarea');
    var lineNumbers = document.querySelector('#html .line-numbers span');

    textarea.addEventListener('keyup', function (event) {
        var numberOfLines = event.target.value.split('\n').length;

        lineNumbers.innerHTML = Array(numberOfLines)
            .fill('<span></span>')
            .join('');
    });

    textarea.addEventListener('keydown', function (event) {
        if (event.key === 'Tab') {
            var start = textarea.selectionStart;
            var end = textarea.selectionEnd;

            textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
            textarea.focus();

            event.preventDefault();
        }
    });
});
