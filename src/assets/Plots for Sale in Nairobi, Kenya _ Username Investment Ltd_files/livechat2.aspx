

   	// livechat by www.mylivechat.com/  2018-06-12

   	


	   MyLiveChat.Version =3017;
	   MyLiveChat.FirstRequestTimeout =1800;
	   MyLiveChat.NextRequestTimeout =15000;
	   MyLiveChat.SyncType ="VISIT";
	   MyLiveChat.SyncStatus ="READY";
	   MyLiveChat.SyncUserName ="Guest_d6cadd99";
	   MyLiveChat.SyncResult =null;
	   MyLiveChat.HasReadyAgents =true;
	   MyLiveChat.SourceUrl ="https://www.usernameproperties.com/";
	   MyLiveChat.AgentTimeZone = parseInt("3" || "-5");
	   MyLiveChat.VisitorStatus ="VISIT";
	   MyLiveChat.UrlBase ="https://s1.mylivechat.com/livechat2/";
	   MyLiveChat.SiteUrl ="https://s1.mylivechat.com/";

   	

	   if (!MyLiveChat.AgentId) MyLiveChat.AgentId = MyLiveChat.RawAgentId;

	   MyLiveChat.Departments = [];

	   MyLiveChat.Departments.push({
		   Name:"Sales",
		   Agents: [{
			   Id:'User:13',
			   Name:"Sylvia",
			   Online:false
   			},{
			   Id:'User:15',
			   Name:"Victor",
			   Online:true
   			},{
			   Id:'User:16',
			   Name:"Daniel",
			   Online:false
   			},{
			   Id:'User:14',
			   Name:"Ambrose",
			   Online:false
   			}],
		   Online:true
   		});



	   MyLiveChat.VisitorUrls = [];



   	


	   MyLiveChat.VisitorLocation ="KE|Kenya|05|Nairobi Area|Nairobi";
	   MyLiveChat.LastLoadTime = new Date().getTime();
	   MyLiveChat.VisitorDuration =10755;
	   MyLiveChat.VisitorEntryUrl ="https://www.usernameproperties.com/";
	   MyLiveChat.VisitorReferUrl ="https://www.google.com/";

	   MyLiveChat.VisitorUrls = [];



   	
	   MyLiveChat.VisitorUrls.push("https://www.usernameproperties.com/");
   	

	   MyLiveChat_Initialize();

	   if (MyLiveChat.localStorage || MyLiveChat.userDataBehavior) {
		   MyLiveChat_SyncToCPR();
	   }

   	