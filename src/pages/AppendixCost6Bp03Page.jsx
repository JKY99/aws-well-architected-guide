import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost6Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST06-BP03 — 동적 리소스 공급</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        Auto Scaling을 사용하여 실제 수요에 맞게 리소스를 자동으로 확장/축소합니다.
        동적 공급은 워크로드 수요가 변화함에 따라 컴퓨팅, 스토리지, 데이터베이스 리소스를
        자동으로 조정하여 항상 적절한 수준의 리소스만 사용하도록 합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드 수요와 정확히 일치하는 리소스만 프로비저닝하여 유휴 리소스 비용을 제거합니다.
        수요 증가 시 성능을 유지하고 수요 감소 시 비용을 절감하는 탄력적인 인프라를 구현합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>피크 부하를 기준으로 고정된 용량을 항상 실행</li>
        <li>수동으로만 용량을 조정하여 대응이 느림</li>
        <li>스케일링 정책을 너무 공격적으로 설정하여 불필요한 스케일 업/다운 발생</li>
        <li>스케일 인 보호 정책 없이 처리 중인 작업이 중단되는 문제 발생</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>실제 사용량에만 비용 지불하여 총 비용 절감</li>
        <li>수요 급증 시에도 성능 저하 없이 자동 확장</li>
        <li>야간/주말 등 저부하 시간대의 비용 자동 절감</li>
        <li>운영팀의 수동 용량 관리 부담 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>EC2 Auto Scaling 그룹을 구성하고 목표 추적 스케일링 정책 설정</li>
        <li>Application Auto Scaling으로 ECS, DynamoDB, Aurora 등 다양한 서비스 자동 조정</li>
        <li>예측 스케일링을 활용하여 예상 트래픽 패턴에 선제적으로 대응</li>
        <li>스케줄 기반 스케일링으로 알려진 수요 패턴에 미리 대비</li>
        <li>AWS Lambda를 사용하여 이벤트 기반 완전 서버리스 아키텍처 구현</li>
        <li>최소/최대 인스턴스 수를 적절히 설정하여 비용과 성능 균형 유지</li>
        <li>CloudWatch 지표와 경보를 사용하여 스케일링 트리거 최적화</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling</li>
        <li>AWS Application Auto Scaling</li>
        <li>AWS Lambda</li>
        <li>Amazon ECS (Fargate)</li>
        <li>Amazon DynamoDB (온디맨드 용량)</li>
        <li>Amazon Aurora Serverless</li>
        <li>Amazon CloudWatch</li>
      </ul>

      <PageNav />
    </article>
  );
}
