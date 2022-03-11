﻿using System;

namespace Szakdolgozat.Classes
{
    public class Question : BaseClass
    {
        private int userId;
        private int subjectId;
        private string name;
        private string questionWrite;
        private DateTime dateTime;

        public Question(int id, int userId, int subjectId, string name, string questionWrite, string Uid, DateTime dateTime) : base(id, Uid)
        {
            UserId = userId;
            SubjectId = subjectId;
            Name = name;
            QuestionWrite = questionWrite;
            DateTime = dateTime;
        }

        public int UserId { get => userId; set => userId = value; }
        public int SubjectId { get => subjectId; set => subjectId = value; }
        public string Name { get => name; set => name = value; }
        public string QuestionWrite { get => questionWrite; set => questionWrite = value; }
        public DateTime DateTime { get => dateTime; set => dateTime = value; }
    }
}
