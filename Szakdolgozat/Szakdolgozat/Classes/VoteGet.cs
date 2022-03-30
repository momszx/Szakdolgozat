namespace Szakdolgozat.Classes
{
    public class VoteGet : Vote
    {
        int voteValue;
        public VoteGet() : base(0, 0, 0, "", 0, "")
        {

        }
        public VoteGet(int id, int userId, int conId, string type, int value, string uID, int voteValue) : base(id, userId, conId, type, value, uID)
        {
            VoteValue = voteValue;
        }

        public int VoteValue { get => voteValue; set => voteValue = value; }
    }
}
