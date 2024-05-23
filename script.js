function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    let avg = sum / scores.length;
    return avg;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90 && score <= 99) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else if (score >= 0 && score <= 59) {
        return "F";
    }
}

function hasPassingGrade(score) {
    if(score >= 60 && score <= 100) {
        return true;
    }
    else {
        return false;
    }
}

function studentMsg(totalScores, studentScore) {
    let avg = getAverage(totalScores);
    let grade = getGrade(studentScore);
    if(grade !== 'F') {
        return "Class average: " + avg + ". Your grade: " + grade + ". You passed the course.";
    }
    else {
        return "Class average: " + avg + ". Your grade: " + grade + ". You failed the course.";
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
