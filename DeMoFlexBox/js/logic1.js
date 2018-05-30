var footballPlayers = [
    {
      name: "Bui Tien Dung",
      position: "goalkeeper",
      birth_year: 1997,
      height: "1m81",
      club: "FLC Thanh Hoa",
    },
    {
      name: "Bui Tien Dung",
      position: "defender",
      birth_year: 1995,
      height: "1m76",
      club: "Viettel",
    },
    {
      name: "Nguyen Cong Phuong",
      position: "striker",
      birth_year: 1996,
      height: "1m68",
      club: "HAGL",
    },
    {
        name: "Tran Tien Dung",
        position: "striker",
        birth_year: 1995,
        height: "1m80",
        club: "HAGL",
      },
      {
        name: "Davil Votalo",
        position: "defenser",
        birth_year: 1992,
        height: "1m90",
        club: "MU",
      },
      {
        name: "Jim Parson",
        position: "Attacker",
        birth_year: 1988,
        height: "1m48",
        club: "Germany",
      },
      {
        name: "Donal Trump",
        position: "striker",
        birth_year: 1992,
        height: "1m88",
        club: "America",
      },
      {
        name: "Putin",
        position: "Persident",
        birth_year: 1996,
        height: "1m80",
        club: "Russia",
      },
    ];
    console.log(footballPlayers);

    function countAllPlayer()
    {
       var dem = 0 ;
        for(var i = 0 ; i < footballPlayers.length ; i++)
        {
            
            dem = dem +1;
            
            }
            
            console.log("so luong cau thu la: " +dem);
    }

    function checkNumberOfPlayers()
    {
        if(countAllPlayer() >15)
        {
            return true;
        }
        else{
            return false;
        }
    }

    function getPlayersByBirthYear(year)
    {
      $.each(footballPlayers, function(i, foolballPlayer)
    {
      var val = foolballPlayer.birth_year;
      if(val == year)
      {
        console.log(foolballPlayer);
      }
     })
    }

    function getPlayersByClub(ClubName)
    {
      $.each(footballPlayers, function(i, foolballPlayer)
    {
      var valClub = foolballPlayer.club;
   
      if(valClub == ClubName)
      {
        console.log(foolballPlayer);
      }
     
    })
    }

    
    function getTallersPlayer()
    {
      $.each(footballPlayers, function(i, footballPlayer)
    {
      var valTall = footballPlayer.height;
      console.log(valTall);
      
    })
    }

    