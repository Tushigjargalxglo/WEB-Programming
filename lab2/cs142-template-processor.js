'use strict';
class Cs142TemplateProcessor{
    constructor(template) {
        this.template = template;
    }
    fillIn(dictionary){
        var result=this.template;
        for(var word in dictionary){
            var replace=new RegExp('\\{\\{' + word + '\\}\\}');  
            result=result.replace(replace, dictionary[word]);
              var rep=new RegExp('\\-\\*\\/'+ word +'\\/\\*\\-');
              result=result.replace(rep, dictionary[word]);
        }
        result=result.replace(new RegExp('\\{\\{\\+\\}\\}', ""), "");
        return result;
    }
}
