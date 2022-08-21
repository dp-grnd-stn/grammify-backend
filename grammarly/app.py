# importing the package  
import language_tool_python  
from chalice import Chalice, Response

app = Chalice(app_name='grammarly')

@app.route('/', methods=['POST'], cors=True)
def index():
    # using the tool  
    my_tool = language_tool_python.LanguageTool('en-US')  
    
    # given text  
    my_text = app.current_request.json_body
    my_text = my_text.get('text')    
    # getting the matches  
    my_matches = my_tool.check(my_text)  
    
    # defining some variables
    myMistakes = []
    myCorrections = []
    startPositions = []
    endPositions = []

    # using the for-loop
    for rules in my_matches:
        if len(rules.replacements) > 0:
            startPositions.append(rules.offset)
            endPositions.append(rules.errorLength + rules.offset)
            myMistakes.append(
                my_text[rules.offset: rules.errorLength + rules.offset])
            myCorrections.append(rules.replacements[0])

    # creating new object
    my_NewText = list(my_text)

    # rewriting the correct passage
    for n in range(len(startPositions)):
        for i in range(len(my_text)):
            my_NewText[startPositions[n]] = myCorrections[n]
            if (i > startPositions[n] and i < endPositions[n]):
                my_NewText[i] = ""

    my_NewText = "".join(my_NewText)

    # printing the text
    return Response(body={"text": my_NewText}, status_code=200)