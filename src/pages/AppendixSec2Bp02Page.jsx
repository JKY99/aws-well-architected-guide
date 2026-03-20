import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec2Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC02-BP02 — 임시 자격 증명 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 장기 자격 증명 노출로 인한 계정 침해 위험이 높습니다.</p>
      </div>
      <p>
        사람과 시스템 ID 모두에 임시 자격 증명을 사용하여 장기 자격 증명으로 인한 위험을 줄입니다. 임시 자격 증명은 자격 증명이 침해될 가능성과 공개 저장소 업로드로 인한 노출 위험을 크게 줄입니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>장기 IAM 사용자 액세스 키 대신 CLI 연동을 통한 임시 자격 증명 사용</li>
        <li>코드와 공개 Git 저장소에 장기 액세스 키 미임베드</li>
        <li>모바일 앱 스토어의 앱에 장기 액세스 키 미임베드</li>
        <li>임시 자격 증명을 사용할 수 있는 경우 시스템 ID에 장기 액세스 키 미사용</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>개발자가 CLI 연동을 통한 임시 자격 증명 대신 장기 IAM 사용자 액세스 키 사용</li>
        <li>코드에 장기 액세스 키를 임베드하고 공개 Git 저장소에 업로드</li>
        <li>앱 스토어의 모바일 앱에 장기 액세스 키 임베드</li>
        <li>임시 자격 증명이 가능한 시스템 ID에 장기 액세스 키 사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자격 증명 노출 위험 감소</li>
        <li>자격 증명 자동 만료</li>
        <li>향상된 감사 추적 및 모니터링</li>
        <li>자격 증명 생명주기 관리 간소화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>사람 ID에는 중앙 자격 증명 공급자와 연동하고, IAM Identity Center를 통해 AWS CLI용 임시 자격 증명을 활성화합니다.</li>
        <li>EC2 인스턴스에는 IAM 역할을 사용하고, Lambda 함수에는 실행 역할을 구성합니다.</li>
        <li>IoT 디바이스에는 AWS IoT Core 자격 증명 공급자를 사용합니다.</li>
        <li>온프레미스 워크로드에는 IAM Roles Anywhere를 사용합니다.</li>
        <li>장기 자격 증명이 불가피한 경우 정기적으로 감사 및 교체하고, 최소 권한을 적용하며, AWS Secrets Manager를 통해 관리합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM — ID 및 액세스 관리</li>
        <li>AWS IAM Identity Center — 사람 사용자를 위한 임시 자격 증명 SSO</li>
        <li>Amazon Cognito — 소비자/고객 애플리케이션 접근</li>
        <li>AWS STS(Security Token Service) — 임시 자격 증명 발급</li>
        <li>AWS Secrets Manager — 장기 자격 증명 안전 보관 및 교체</li>
        <li>IAM Roles Anywhere — 온프레미스 워크로드용 임시 자격 증명</li>
      </ul>
      <PageNav />
    </article>
  );
}
