using System.Threading.Tasks;

namespace Szakdolgozat.Hubs
{
    public interface IChatClient
    {
        Task ReceiveMessage(ChatMessage message);
    }
}
