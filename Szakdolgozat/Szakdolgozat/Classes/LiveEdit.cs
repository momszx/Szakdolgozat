using System.Collections.Generic;

namespace Szakdolgozat.Classes
{
    public class LiveEdit
    {
        private int id;
        private string text;
        private string group;
        private List<string> userlist;
        public LiveEdit()
        {
            Id = 0;
            Text = "";
            Group = "";
            Userlist = new List<string>();
        }
        public LiveEdit(int id, string text, string group, List<string> userlist)
        {
            Id = id;
            Text = text;
            Group = group;
            Userlist = userlist;
        }

        public int Id { get => id; set => id = value; }
        public string Text { get => text; set => text = value; }
        public string Group { get => group; set => group = value; }
        public List<string> Userlist { get => userlist; set => userlist = value; }
    }
}
